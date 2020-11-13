import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';

export const LOAD = '[Client] Load';
export const LOAD_SUCCESS = '[Client] Load Success';
export const CREATE = '[Client] Create';
export const CREATE_FAILED = '[Client] Create FAILED';
export const UPDATE = '[Client] Update';
export const DELETE = '[Client] Delete';
export const SELECT = '[Client] Select';
export const CLEAR = '[Client] Clear';

export class LoadAction implements Action {
  readonly type = LOAD;
  constructor(public payload: any = null) { }
}

export class LoadActionSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: Client[]) { }
}

export class CreateAction implements Action {
  readonly type = CREATE;
  constructor(public payload: Client) { }
}

export class CreateActionFailed implements Action {
  readonly type = CREATE_FAILED;
  constructor(public payload: any) { }
}

export class UpdateAction implements Action {
  readonly type = UPDATE;
  constructor(public payload: Client) { }
}

export class DeleteAction implements Action {
  readonly type = DELETE;
  constructor(public payload: string) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;
  constructor(public payload: Client) { }
}

export class ClearAction implements Action {
  readonly type = CLEAR;
  constructor(public payload: any = null) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type All
  = LoadAction
  | LoadActionSuccess
  | CreateAction
  | CreateActionFailed
  | UpdateAction
  | DeleteAction
  | SelectAction
  | ClearAction;
