import { Component, OnInit, Input } from '@angular/core';
import { List,person } from '../models';

@Component({
  selector: 'app-star-war-people-list',
  templateUrl: './star-war-people-list.component.html',
  styleUrls: ['./star-war-people-list.component.scss']
})
export class StarWarPeopleListComponent implements OnInit {
  @Input() data : List<person> | null = null;

  constructor() { }

  ngOnInit(): void {
    return;
  }

}
