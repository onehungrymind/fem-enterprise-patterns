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
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientsComponent } from './clients/clients.component';
import { DemoComponent } from './demo/demo.component';
import { RoutingModule } from './routing.module';
import { ActionsService } from './shared/services';
import { SocketService } from './shared/services/socket.service';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:5000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ClientsComponent,
    ClientsListComponent,
    ClientDetailsComponent,
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
    SocketIoModule.forRoot(config),
    UiToolbarModule,
  ],
  providers: [
    ActionsService,
    SocketService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
