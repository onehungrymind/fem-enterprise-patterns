import { Component } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  price;
  mode;
  widgets: Widget[];

  updateWidgetsAndRecalculateCost(widget: Widget) {
    switch (this.mode) {
      case 'create':
        const newWidget = Object.assign({}, widget, { id: uuidv4() });
        this.widgets = [...this.widgets, newWidget];
        break;
      case 'update':
        this.widgets = this.widgets.map(_widget => widget.id === _widget.id
          ? Object.assign({}, widget) : _widget);
        break;
      case 'delete':
        this.widgets = this.widgets.filter(_widget => widget.id !== _widget.id);
        break;
      default:
        break;
    }
    return this.widgets.reduce((acc, curr) => acc + curr.price, 0);
  }

}
