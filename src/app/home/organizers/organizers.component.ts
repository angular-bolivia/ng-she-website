import { Component, OnInit } from '@angular/core';

import organizers from '../../../assets/data/organizers';

@Component({
  selector: 'ngs-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss'],
})
export class OrganizersComponent implements OnInit {
  organizers = organizers.filter((organizer) => organizer.featured);

  constructor() {}

  ngOnInit(): void {}
}
