import { Component, OnInit , Input } from '@angular/core';
import { person } from '../models';

@Component({
  selector: 'app-star-war-person-view',
  templateUrl: './star-war-person-view.component.html',
  styleUrls: ['./star-war-person-view.component.scss']
})
export class StarWarPersonViewComponent implements OnInit {
  @Input() data : person | null = null;

  constructor() {}

  ngOnInit(): void {
    return;
  }

}
