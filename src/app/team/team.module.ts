import { PeopleListModule } from './../shared/people-list/people-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    PeopleListModule,
  ],
})
export class TeamModule {}
