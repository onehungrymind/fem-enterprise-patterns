import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { Store } from '@ngrx/store';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../shared/services/socket.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClientsComponents', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsComponent, ClientsListComponent, ClientDetailsComponent ],
      imports: [AppMaterialModule, FormsModule, BrowserAnimationsModule],
      providers: [Store, SocketService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
