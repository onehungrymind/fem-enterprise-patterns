import { Component, OnInit } from '@angular/core';

interface BaseEntity {
  id: string | null;
}

interface Action {
  type: string;
  payload?: any;
}

interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string;
}

const peter: Client = {
  id: '1',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Acme, Inc',
};

const john: Client = {
  id: '2',
  firstName: 'John',
  lastName: 'Doe',
  company: 'NA',
};

const clients: Client[] = [peter, john];

interface ClientsState {
  clients: Client[];
  currentClient: Client;
}

const newClient: Client = {
  id: null,
  firstName: '',
  lastName: '',
  company: '',
};

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient,
};

const CLIENT_LOAD = '[Client] Load';
const CLIENT_CREATE = '[Client] Create';
const CLIENT_UPDATE = '[Client] Update';
const CLIENT_DELETE = '[Client] Delete';
const CLIENT_SELECT = '[Client] Select';
const CLIENT_CLEAR = '[Client] Clear';

const addEntity = (collection, entity) => [...collection, entity];
const updateEntity = (collection, entity) =>
  collection.map(e => e.id === entity.id ? Object.assign({}, entity) : e);
const deleteEntity = (collection, entity) =>
  collection.filter(e => e.id !== entity.id);

const loadClients = (state, clients): ClientsState => {
  return {
    clients,
    currentClient: state.currentClient
  }
};

const selectClient = (state, client): ClientsState => {
  return {
    clients: state.clients,
    currentClient: client
  }
};

const clearClient = (state): ClientsState => {
  return {
    clients: state.clients,
    currentClient: null
  }
};

const createClient = (state, client): ClientsState => {
  return {
    clients: [...state.clients, client],
    currentClient: state.currentClient
  }
};

const updateClient = (state, client): ClientsState => {
  return {
    clients: state.clients.map(c => {
      return (c.id === client.id) ? Object.assign({}, client) : c;
    }),
    currentClient: state.currentClient
  }
};

const deleteClient = (state, client): ClientsState => {
  return {
    clients: state.clients.filter(c => c.id !== client.id),
    currentClient: state.currentClient
  }
};

const clientsReducer = (
  state: ClientsState = initialClientsState,
  action: Action
) => {
  switch (action.type) {
    case CLIENT_LOAD:
      return loadClients(state, action.payload);
    case CLIENT_SELECT:
      return selectClient(state, action.payload);
    case CLIENT_CLEAR:
      return clearClient(state);
    case CLIENT_CREATE:
      return createClient(state, action.payload);
    case CLIENT_UPDATE:
      return updateClient(state, action.payload);
    case CLIENT_DELETE:
      return deleteClient(state, action.payload);
    default:
      return state;
  }
};

class ClientsStore {
  reducer;
  state: ClientsState;

  constructor(state: ClientsState, reducer) {
    this.state = state;
    this.reducer = reducer;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const jane: Client = {
  id: '123',
  firstName: 'Jane',
  lastName: 'Doe',
  company: 'Anon'
}

const clientsStore = new ClientsStore(initialClientsState, clientsReducer);
const aClient = clientsStore.select('currentClient');
clientsStore.dispatch({ type: CLIENT_CREATE, payload: jane});
const allClients = clientsStore.select('clients');

interface Project extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
}

interface ProjectsState {
  projects: Project[];
  currentProject: Project;
}

const superProject: Project = {
  id: '1',
  title: 'Super Project',
  description: 'This is awesome!',
  completed: false,
};

const hellProject: Project = {
  id: '2',
  title: 'Hell Project on Earth',
  description: 'Just make it stop',
  completed: true,
};

const newProject: Project = {
  id: null,
  title: '',
  description: '',
  completed: false,
};

const PROJECT_LOAD = '[Project] Load';
const PROJECT_CREATE = '[Project] Create';
const PROJECT_UPDATE = '[Project] Update';
const PROJECT_DELETE = '[Project] Delete';
const PROJECT_SELECT = '[Project] Select';
const PROJECT_CLEAR = '[Project] Clear';

const loadProjects = (state, projects) => {
  console.log('LOAD PROJECTS!', projects);
  return state;
};

const selectProject = (state, project) => {
  console.log('SELECT PROJECT!', project);
  return state;
};

const clearProject = (state, project) => {
  console.log('CLEAR PROJECT!', project);
  return state;
};

const createProject = (state, project) => {
  console.log('CREATE PROJECT!', project);
  return state;
};

const updateProject = (state, project) => {
  console.log('UPDATE PROJECT!', project);
  return state;
};

const deleteProject = (state, project) => {
  console.log('DELETE PROJECT!', project);
  return state;
};

const projectsReducer = (
  state: ProjectsState = initialProjectsState,
  action: Action
) => {
  switch (action.type) {
    case PROJECT_LOAD:
      return loadProjects(state, action.payload);
    case PROJECT_SELECT:
      return selectProject(state, action.payload);
    case PROJECT_CLEAR:
      return clearProject(state, action.payload);
    case PROJECT_CREATE:
      return createProject(state, action.payload);
    case PROJECT_UPDATE:
      return updateProject(state, action.payload);
    case PROJECT_DELETE:
      return deleteProject(state, action.payload);
    default:
      return state;
  }
};


const projects: Project[] = [superProject, hellProject];

const initialProjectsState: ProjectsState = {
  projects,
  currentProject: newProject,
};

class ProjectsStore {
  state: ProjectsState;

  constructor(state: ProjectsState) {
    this.state = state;
  }

  getState(): ProjectsState {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}

const projectsStore = new ProjectsStore(initialProjectsState);
const currentProjects = projectsStore.select('projects');

interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
}

const appState: AppState = {
  clientsState: initialClientsState,
  projectsState: initialProjectsState,
};

const tango = allClients;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
