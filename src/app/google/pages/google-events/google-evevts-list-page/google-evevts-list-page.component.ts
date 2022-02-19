import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleEventsService } from 'src/app/google/google-events.service';
import { Eventlist } from 'src/app/google/models';

@Component({
  selector: 'app-google-evevts-list-page',
  templateUrl: './google-evevts-list-page.component.html',
  styleUrls: ['./google-evevts-list-page.component.scss'],
})
export class GoogleEvevtsListPageComponent implements OnInit {
  data$!: Observable<Eventlist>;

  constructor(
    private readonly service: GoogleEventsService
    ) {}

  ngOnInit(): void {
    const now = new Date();
    this.data$ = this.service.getAll(
      {
        singleEvents: true,
        orderBy: 'startTime',
        timeMin: now.toISOString(), // change time to STR
      },
    );
  }
}
