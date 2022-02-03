import { Component, OnInit } from '@angular/core';
import { person,List } from '../models';
import { StarWarPeopleFetchService } from '../star-war-people-fetch.service';

@Component({
  selector: 'app-star-war-people-list-page',
  templateUrl: './star-war-people-list-page.component.html',
  styleUrls: ['./star-war-people-list-page.component.scss']
})
export class StarWarPeopleListPageComponent implements OnInit {
  data$!: Promise<List<person>>; // $ for tell it is observer https://angular.io/api/common/ AsyncPipe

  constructor(
    private readonly service: StarWarPeopleFetchService
  ) { }

  ngOnInit(): void {
    // (async() => {
    //  this.data = await this.service.getAll()
    // })();

    this.data$ = this.service.getAll();
  }
}
