import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { OrganizerModalContentModule } from '../shared/organizer-modal-content/organizer-modal-content.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    ModalModule,
    TeamRoutingModule,
    OrganizerModalContentModule,
  ],
})
export class TeamModule {}
