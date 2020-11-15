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
  @ViewChild('organizerModal') personModal: ModalDirective;
  selectedPerson: Person;
  people = mentors;

  constructor() {}

  ngOnInit(): void {
    console.log(this.people);
  }

  openPersonModal(person: Person): void {
    this.selectedPerson = person;

    timer(0).subscribe(() => this.personModal.show());
  }
}
