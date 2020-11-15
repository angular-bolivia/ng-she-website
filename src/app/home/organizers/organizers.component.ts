import { Component, OnInit, ViewChild } from '@angular/core';
import organizers from 'src/assets/data/organizers';

import { Person } from '../../core/models/organizer.model';

@Component({
  selector: 'ngs-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss'],
})
export class OrganizersComponent implements OnInit {
  organizers = organizers.slice(0, 3);

  constructor() {}

  ngOnInit(): void {}
}
