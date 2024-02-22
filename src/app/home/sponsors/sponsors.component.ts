import { Component, OnInit } from '@angular/core';
import sponsors from '../../../assets/data/sponsors';

@Component({
  selector: 'ngs-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {

  sponsors = sponsors;

}
