import { Component, OnInit } from '@angular/core';

import mentors from '../../../assets/data/mentors';

@Component({
  selector: 'ngs-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss'],
})
export class MentorsComponent implements OnInit {
  mentors = mentors;

  constructor() {}

  ngOnInit(): void {
  }
}
