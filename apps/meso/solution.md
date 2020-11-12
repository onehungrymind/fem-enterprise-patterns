
# Nouns

### Nouns Example

```
interface Client {
  id?: string;
  firstName: string;
  lastName: string;
  company: string;
}

interface ClientsState {
  clients: Client[];
  currentClient: Client;
}

const newClient: Client = {
  id: null,
  firstName: '',
  lastName: '',
  company: '',
}

const superClient: Client = {
  id: '1111',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Bacon, Inc',
}

const clients: Client[] = [
  {
    id: '12345',
    firstName: 'Lukas',
    lastName: 'Holla!',
    company: 'Hustle, Inc',
  },
  {
    id: '54321',
    firstName: 'Parmit',
    lastName: 'Super Map',
    company: 'IBM'
  },
  superClient,
];

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient,
}
```

### Nouns Solution

```
interface Project {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface ProjectsState {
  projects: Project[];
  currentProject: Project;
}

const project: Project = {
  id: '12345',
  title: 'Super Project',
  description: 'All my wildest dreams are coming true',
  completed: false,
}

const projects: Project[] = [
  project,
];

const initialProjectState: ProjectsState = {
  projects,
  currentProject: null,
}
```

# Verbs

### Verbs Example

```
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const total = subtract(4, 1);
```

```
class ClientStore {
  state: ClientsState;

  constructor(state) {
    this.state = state; 
  }

  getState() {
    return this.state;
  }

  select(key) {
    return this.state[key];
  }
}

const clientStore = new ClientStore(initialClientsState);
```

### Verbs Solution

```
class ProjectsStore {
  state: ProjectsState;

  constructor(state) {
    this.state = state; 
  }

  getState() {
    return this.state;
  }

  select(key) {
    return this.state[key];
  }
}

const projectsStore = new ProjectsStore(initialProjectsState);
```

# Conditions

### Conditions Example 

```
interface Action {
  type: string;
  payload?: any;
}

const CLIENT_LOAD    = '[Client] Load';
const CLIENT_CREATE  = '[Client] Create';
const CLIENT_UPDATE  = '[Client] Update';
const CLIENT_DELETE  = '[Client] Delete';
const CLIENT_SELECT  = '[Client] Select';
const CLIENT_CLEAR   = '[Client] Clear';

const loadClients = (state, payload): ClientsState => {
  return state;
}

const selectClient = (state, payload): ClientsState => {
  return state;
}

const createClient = (state, payload): ClientsState => {
  return state;
}

const updateClient = (state, payload): ClientsState => {
  return state;
}

const deleteClient = (state, payload): ClientsState => {
  return state;
}

const reducer = (state = initialClientsState, action: Action): ClientsState => {
  switch (action.type) {
    case CLIENT_LOAD:
      return loadClients(state, action.payload);
    case CLIENT_SELECT:
      return selectClient(state, action.payload);
    case CLIENT_CREATE:
      return createClient(state, action.payload);
    case CLIENT_UPDATE:
      return updateClient(state, action.payload);
    case CLIENT_DELETE:
      return deleteClient(state, action.payload);
    default:
      return state;
  }
}
```

### Conditions Solution

```
const PROJECT_LOAD    = '[Project] Load';
const PROJECT_CREATE  = '[Project] Create';
const PROJECT_UPDATE  = '[Project] Update';
const PROJECT_DELETE  = '[Project] Delete';
const PROJECT_SELECT  = '[Project] Select';
const PROJECT_CLEAR   = '[Project] Clear';

const loadProjects = (state, payload): ProjectsState => {
  return state;
}

const selectProject = (state, payload): ProjectsState => {
  return state;
}

const createProject = (state, payload): ProjectsState => {
  return state;
}

const updateProject = (state, payload): ProjectsState => {
  return state;
}

const deleteProject = (state, payload): ProjectsState => {
  return state;
}

const reducer = (state = initialProjectsState, action: Action): ProjectsState => {
  switch (action.type) {
    case PROJECT_LOAD:
      return loadProjects(state, action.payload);
    case PROJECT_SELECT:
      return selectProject(state, action.payload);
    case PROJECT_CREATE:
      return createProject(state, action.payload);
    case PROJECT_UPDATE:
      return updateProject(state, action.payload);
    case PROJECT_DELETE:
      return deleteProject(state, action.payload);
    default:
      return state;
  }
}
```

# Iterators

### Iterators Example

```
const loadClients = (state, payload): ClientsState => {
  return {
    clients: payload,
    currentClient: null,
  }
}

const selectClient = (state, payload): ClientsState => {
  return {
    clients: state.clients,
    currentClient: payload,
  }
}

const createClient = (state, payload): ClientsState => {
  return {
    clients: [...state.clients, payload],
    currentClient: state.currentClient,
  }
}

const updateClient = (state, payload): ClientsState => {
  return {
    clients: state.clients.map(client => {
      return (client.id === payload.id ? Object.assign({}, client, payload) : client)
    }),
    currentClient: state.currentClient,
  }
}

const deleteClient = (state, payload): ClientsState => {
  return {
    clients: state.clients.filter(client => client.id !== payload.id),
    currentClient: state.currentClient,
  }
}
```

### Iterators Solution

```
const loadProjects = (state, payload): ProjectsState => {
  return {
    projects: payload,
    currentProject: null,
  }
}

const selectProject = (state, payload): ProjectsState => {
  return {
    projects: state.projects,
    currentProject: payload,
  }
}

const createProject = (state, payload): ProjectsState => {
  return {
    projects: [...state.projects, payload],
    currentProject: state.currentProject,
  }
}

const updateProject = (state, payload): ProjectsState => {
  return {
    projects: state.projects.map(project => {
      return (project.id === payload.id ? Object.assign({}, project, payload) : project)
    }),
    currentProject: state.currentProject,
  }
}

const deleteProject = (state, payload): ProjectsState => {
  return {
    projects: state.projects.filter(project => project.id !== payload.id),
    currentProject: state.currentProject,
  }
}
```

### Finale
```
class Store {
  reducer;
  state: ClientsState;

  constructor(state: ClientsState, reducer) {
    this.reducer = reducer;
    this.state = state;
  }

  getState(): ClientsState {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(initialClientsState, reducer);

const aClient = store.select('currentClient');
store.dispatch({ type: CLIENT_SELECT, payload: spiderMan});
const bClient = store.select('currentClient');
```
