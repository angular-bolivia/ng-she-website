import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Organizer } from '../../core/models/organizer.model';

@Component({
  selector: 'ngs-organizer-modal-content',
  templateUrl: './organizer-modal-content.component.html',
  styleUrls: ['./organizer-modal-content.component.scss'],
})
export class OrganizerModalContentComponent implements OnInit {
  @Input() organizer: Organizer;
  @Output() closeModal = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
