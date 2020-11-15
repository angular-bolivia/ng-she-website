import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { OrganizerModalContentModule } from '../organizer-modal-content/organizer-modal-content.module';
import { PeopleListComponent } from './people-list.component';



@NgModule({
  declarations: [PeopleListComponent],
  imports: [
    CommonModule,
    OrganizerModalContentModule,
    ModalModule
  ],
  exports: [PeopleListComponent]
})
export class PeopleListModule { }
