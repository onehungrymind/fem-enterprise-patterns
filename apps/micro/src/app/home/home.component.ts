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
  
  //function created to separate concerns
  reCalculateTotal(mode:string, widgets:Widget[], widget: Widget) {
    this.widgets = this.updateWidgets(mode, widgets, widget);
    this.price = this.getTotalPrice(widgets);
  }

  updateWidgets(mode:string, widgets:Widget[],widget: Widget) {
    switch (mode) {
      case 'create':
        return this.addWidget(widgets,widget)
      case 'update':
        return this.updateWidget(widgets,widget);
      case 'delete':
        return this.deleteWidget(widgets,widget);
      default:
    }
  }
  // funtion list created to have only one concernat the time
  addWidget(widgets:Widget[], widget:Widget){
    const newWidget = Object.assign({}, widget, { id: uuidv4() });
    return [...widgets, newWidget];
  }

  updateWidget(widgets:Widget[],widget:Widget){
    return widgets.map(_widget => widget.id === _widget.id
      ? Object.assign({}, widget) : _widget);
  }
  deleteWidget(widgets:Widget[], widget:Widget){
    return widgets.filter(_widget => widget.id !== _widget.id);
  }

  getTotalPrice(widgets:Widget[]){
    return widgets.reduce((acc, curr) => acc + curr.price, 0);
  }
}
