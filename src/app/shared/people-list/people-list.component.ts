import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { timer } from 'rxjs';

import mentors from '../../../assets/data/mentors';
import { Person } from '../../core/models/person.model';

@Component({
  selector: 'ngs-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})

export class PeopleListComponent implements OnInit {
  @Input() title: string;
  @Input() displayFourItemsByRow = false;
  @Input() hasTopSpace = false;
  @Input() people: Person[] = [];

  @ViewChild('organizerModal') personModal: ModalDirective;

  selectedPerson: Person;
  mentors = mentors;

  constructor() {}

  ngOnInit(): void {
  }

  openPersonModal(person: Person): void {
    this.selectedPerson = person;

    timer(0).subscribe(() => this.personModal.show());
  }

}
