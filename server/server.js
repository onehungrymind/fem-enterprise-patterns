'use strict';

const app = require('express')();
const options = {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
};
const http = require('http').Server(app);
const io = require('socket.io')(http, options);
const { v4: uuidv4 } = require('uuid');

// -------------------------------------------------------------------
// ACTIONS
// -------------------------------------------------------------------
const CLIENT_LOAD = '[Client] Load';
const CLIENT_CREATE = '[Client] Create';
const CLIENT_UPDATE = '[Client] Update';
const CLIENT_DELETE = '[Client] Delete';
const CLIENT_SELECT = '[Client] Select';
const CLIENT_CLEAR = '[Client] Clear';

// -------------------------------------------------------------------
// STORE
// -------------------------------------------------------------------
const clients = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Acme, Inc',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    company: 'Super, Inc',
  },
];

const newClient = { id: null, firstName: '', lastName: '', company: '' };

const initialState = {
  clients,
  currentClient: newClient,
};

class Store {
  constructor(reducer) {
    this.reducer = reducer;
    this.state = reducer(undefined, { type: '' });
  }

  getState() {
    return this.state.present;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

// -------------------------------------------------------------------
// REDUCER
// -------------------------------------------------------------------
const selectClient = (state, payload) => {
  return {
    clients: state.clients,
    currentClient: payload,
  };
};

const clearClient = (state, payload) => {
  return {
    clients: state.clients,
    currentClient: newClient,
  };
};

const createClient = (state, payload) => {
  const newClient = Object.assign({}, payload, { id: uuidv4() });
  return {
    clients: [...state.clients, newClient],
    currentClient: state.currentClient,
  };
};

const updateClient = (state, payload) => {
  return {
    clients: state.clients.map((client) => {
      return client.id === payload.id
        ? Object.assign({}, client, payload)
        : client;
    }),
    currentClient: state.currentClient,
  };
};

const deleteClient = (state, payload) => {
  return {
    clients: state.clients.filter((client) => client.id !== payload.id),
    currentClient: state.currentClient,
  };
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLIENT_LOAD:
      return state;
    case CLIENT_SELECT:
      return selectClient(state, payload);
    case CLIENT_CREATE:
      return createClient(state, payload);
    case CLIENT_UPDATE:
      return updateClient(state, payload);
    case CLIENT_DELETE:
      return deleteClient(state, payload);
    case CLIENT_CLEAR:
      return clearClient(state, payload);
    default:
      return state;
  }
};

// -------------------------------------------------------------------
// SOCKET
// -------------------------------------------------------------------
io.on('connection', (socket) => {
  console.log('user connected');
  io.emit('update', store.getState());

  socket.on('dispatch', (action) => {
    store.dispatch(action);
    io.emit('update', store.getState());
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

http.listen(5000, () => {
  console.log('started on port 5000');
});

// -------------------------------------------------------------------
// HISTORY
// -------------------------------------------------------------------

/*
TODO This needs work
- Will get an index out of range error
*/
const undoable = function (reducer) {
  // Call the reducer with empty action to populate the initial state
  const initialState = {
    past: [],
    present: reducer(undefined, { type: '' }),
    future: [],
  };

  // Return a reducer that handles undo and redo
  return function (state = initialState, action) {
    const { past, present, future } = state;

    switch (action.type) {
      case 'UNDO':
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
      case 'REDO':
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
      default:
        console.log('default', action);
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action);
        console.log(newPresent);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
    }
  };
};

const store = new Store(undoable(reducer));
