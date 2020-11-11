import { Component, OnInit } from '@angular/core';

import { MetaTagsUpdaterService } from '../core/services/meta-tags-updater.service';

@Component({
  selector: 'ngs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private metaUpdater: MetaTagsUpdaterService) {}

  ngOnInit(): void {
    this.metaUpdater.updateMetaTags();
  }
}
