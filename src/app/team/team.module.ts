import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { PeopleListModule } from '../shared/people-list/people-list.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, TeamRoutingModule, PeopleListModule],
})
export class TeamModule {}
