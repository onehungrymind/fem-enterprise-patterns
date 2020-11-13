import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionsService, Store } from '../shared/services/';

import 'brace/index';
import 'brace/theme/eclipse';
import 'brace/mode/json';
import 'brace/ext/language_tools.js';

import { interval, from, Observable, zip } from 'rxjs';
import { zip as zipOp } from 'rxjs/operators';
declare const ace: any;

@Component({
  selector: 'fem-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  @ViewChild('stepEditor', { static: true }) stepEditor;
  @ViewChild('cycleEditor', { static: true }) cycleEditor;

  actions = [
    {
      type: '[Client] Select',
      payload: {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        company: 'Acme, Inc',
      },
    },
    {
      type: '[Client] Select',
      payload: {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        company: 'Super, Inc',
      },
    },
    {
      type: '[Client] Select',
      payload: {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        company: 'Acme, Inc',
      },
    },
    {
      type: '[Client] Select',
      payload: {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        company: 'Super, Inc',
      },
    },
    {
      type: '[Client] Select',
      payload: {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        company: 'Acme, Inc',
      },
    },
    {
      type: '[Client] Select',
      payload: {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        company: 'Super, Inc',
      },
    },
  ];

  index = 0;
  timerInterval = 500;
  action = '';
  rawActions = '';

  constructor(private actionsService: ActionsService, private store: Store) {}

  ngOnInit() {
    this.initEditor(this.stepEditor);
    this.initEditor(this.cycleEditor);
  }

  initEditor(editor) {
    editor.setTheme('monokai');

    editor.setMode('json');

    editor.getEditor().setOptions({
      showLineNumbers: false,
      showGutter: false,
      tabSize: 2,
    });
  }

  // STEP O1: Manual step
  step() {
    this.index = this.index < this.actions.length - 1 ? this.index + 1 : 0;
    this.store.dispatch(this.actions[this.index]);
  }

  // STEP O2: Manual cycle
  cycle() {
    const that = this;
    const result = zip(
      from(this.actions),
      interval(this.timerInterval),
      (a, b) => {
        // THIS IS NAUGHTY!
        this.index = b;
        // THIS IS AWESOME!
        return a;
      }
    );
    result.subscribe((action) => this.store.dispatch(action));
  }

  // STEP O3: Dynamic step
  fetchSingle() {
    this.actionsService
      .single()
      .subscribe(
        (action) => (this.action = JSON.stringify(action, null, '\t'))
      );
  }

  dispatch(action) {
    this.store.dispatch(JSON.parse(action));
  }

  // STEP O4: Dynamic cycle
  fetchAll() {
    this.actionsService
      .all()
      .subscribe(
        (actions) => (this.rawActions = JSON.stringify(actions, null, '\t'))
      );
  }

  dispatchCycle(rawActions) {
    const actions = JSON.parse(rawActions);
    const result = from(actions).pipe(
      zipOp(interval(this.timerInterval), (a, b) => a)
    );
    result.subscribe((action: any) => this.store.dispatch(action));
  }

  // STEP 05: Remote step
  // dispatchRemote(action) {
  //   this.remoteActions.add(JSON.parse(action));
  // }

  // HISTORY
  undo() {
    this.store.dispatch({ type: 'UNDO' });
  }

  redo() {
    this.store.dispatch({ type: 'REDO' });
  }
}
