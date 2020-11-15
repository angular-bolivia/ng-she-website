import { Component, OnInit, ViewChild } from '@angular/core';
import organizers from 'src/assets/data/organizers';

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
