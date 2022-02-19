import { Component, Input, OnInit } from '@angular/core';
import { Eventlist } from '../../models';

@Component({
  selector: 'app-google-events-list',
  templateUrl: './google-events-list.component.html',
  styleUrls: ['./google-events-list.component.scss']
})
export class GoogleEventsListComponent implements OnInit {
  @Input() data: Eventlist | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}
