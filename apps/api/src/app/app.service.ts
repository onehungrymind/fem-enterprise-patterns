import { Injectable } from '@nestjs/common';
import { Message, Action } from '@fem/api-interfaces';

const clientAction: Action = {
  type: '[Client] Select',
  payload: {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Acme, Inc'
  }
};

const clientActions: Action[] =  [
{
    type: '[Client] Select',
    payload: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      company: 'Acme, Inc'
    }
  },
  {
    type: '[Client] Select',
    payload: {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      company: 'Super, Inc'
    }
  },
  {
    type: '[Client] Select',
    payload: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      company: 'Acme, Inc'
    }
  },
  {
    type: '[Client] Select',
    payload: {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      company: 'Super, Inc'
    }
  },
  {
    type: '[Client] Select',
    payload: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      company: 'Acme, Inc'
    }
  },
  {
    type: '[Client] Select',
    payload: {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      company: 'Super, Inc'
    }
  }
]

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getAction(): Action {
    return clientAction;
  }

  getActions(): Action[] {
    return clientActions;
  }
}
