import { Component, OnInit} from '@angular/core';
import organizers from 'src/assets/data/organizers';

import { MetaTagsUpdaterService } from '../core/services/meta-tags-updater.service';

@Component({
  selector: 'ngs-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  organizers = organizers;

  constructor(private metaUpdater: MetaTagsUpdaterService) {}

  ngOnInit(): void {
    this.metaUpdater.updateMetaTags(
      'Equipo organizador',
      'Conoce al equipo detrás de ng|she.'
    );
  }
}
