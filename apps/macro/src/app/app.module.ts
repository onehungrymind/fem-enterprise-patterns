import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@fem/material';
import { UiToolbarModule } from '@fem/ui-toolbar';
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
  ],
  imports: [
    AceEditorModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RoutingModule,
    UiToolbarModule,
  ],
  providers: [
    AnimalService,
    BooksService,
    NotificationService,
    SalesNumbersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
