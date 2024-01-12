import { Component, OnInit } from '@angular/core';

import communityPartners from '../../../assets/data/community-partners';

@Component({
  selector: 'ngs-community-partners',
  templateUrl: './community-partners.component.html',
  styleUrls: ['./community-partners.component.scss']
})
export class CommunityPartnersComponent implements OnInit {
  communityPartners = communityPartners;

  constructor() { }

  ngOnInit(): void {
  }

}
