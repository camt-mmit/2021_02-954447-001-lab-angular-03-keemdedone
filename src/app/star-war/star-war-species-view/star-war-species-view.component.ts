import { Component, Input, OnInit } from '@angular/core';
import { species } from '../models';

@Component({
  selector: 'app-star-war-species-view',
  templateUrl: './star-war-species-view.component.html',
  styleUrls: ['./star-war-species-view.component.scss']
})
export class StarWarSpeciesViewComponent implements OnInit {
  @Input() data: species | null = null;
  constructor() { }

  ngOnInit(): void {
    return;
  }

}
