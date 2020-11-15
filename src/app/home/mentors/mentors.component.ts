import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/core/models/organizer.model';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { timer } from 'rxjs';
import mentors from 'src/assets/data/mentors';

@Component({
  selector: 'ngs-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss'],
})
export class MentorsComponent implements OnInit {
  @ViewChild('organizerModal') mentorModal: ModalDirective;
  selectedMentor: Person;
  mentors = mentors;

  constructor() {}

  ngOnInit(): void {
  }

  openMentorModal(person: Person): void {
    this.selectedMentor = person;

    timer(0).subscribe(() => this.mentorModal.show());
  }
}
