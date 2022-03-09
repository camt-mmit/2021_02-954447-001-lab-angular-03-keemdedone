import { Component, Input, OnInit } from '@angular/core';
import { planet } from '../models';

@Component({
  selector: 'app-star-war-planet-view',
  templateUrl: './star-war-planet-view.component.html',
  styleUrls: ['./star-war-planet-view.component.scss']
})
export class StarWarPlanetViewComponent implements OnInit {
  @Input() data: planet | null = null;

  constructor() { }

  ngOnInit(): void {
    return;
  }

}
