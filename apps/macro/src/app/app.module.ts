import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@fem/material';
import { UiToolbarModule } from '@fem/ui-toolbar';
import { SocketService } from 'apps/macro/src/app/shared/services/socket.service';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientsComponent } from './clients/clients.component';
import { DemoComponent } from './demo/demo.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';

import {
  CircleComponent,
  LineComponent,
  ShotComponent
} from './shared/components';

import {
  ActionsService,
  AnimalService,
  BooksService,
  NotificationService,
  SalesNumbersService
} from './shared/services';

import {
  BasicSequenceComponent,
  MaintainingStateComponent,
  MergingStreamsComponent,
  MapToFunctionsComponent,
  TriggersComponent,
  StreamOriginComponent,
  SimpleAnimationComponent,
  AnimationComponent,
  EventCommunicationComponent
} from './concepts';

import {
  InputComponent,
  CounterComponent,
  SlideshowComponent,
  LocationComponent,
  MapComponent,
  AnnotateComponent,
  DocComponent,
  GameComponent,
  SliderComponent,
  SalesWidgetComponent
} from './examples';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AnimationComponent,
    AnnotateComponent,
    AppComponent,
    BasicSequenceComponent,
    CircleComponent,
    CounterComponent,
    DocComponent,
    EventCommunicationComponent,
    GameComponent,
    HomeComponent,
    InputComponent,
    LineComponent,
    LocationComponent,
    MaintainingStateComponent,
    MapComponent,
    MapToFunctionsComponent,
    MergingStreamsComponent,
    SalesWidgetComponent,
    ShotComponent,
    SimpleAnimationComponent,
    SliderComponent,
    SlideshowComponent,
    StreamOriginComponent,
    TriggersComponent,
    DemoComponent,
    ClientsComponent,
    ClientsListComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RoutingModule,
    UiToolbarModule,
    AceEditorModule,
    HttpClientModule,
    FlexLayoutModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    AnimalService,
    BooksService,
    NotificationService,
    SalesNumbersService,
    ActionsService,
    SocketService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
