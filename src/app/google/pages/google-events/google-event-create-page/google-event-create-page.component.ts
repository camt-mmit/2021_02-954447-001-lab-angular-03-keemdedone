import { Component, OnInit } from '@angular/core';
import { GoogleEventsService } from 'src/app/google/google-events.service';
import { EventResource } from 'src/app/google/models';

@Component({
  selector: 'app-google-event-create-page',
  templateUrl: './google-event-create-page.component.html',
  styleUrls: ['./google-event-create-page.component.scss']
})
export class GoogleEventCreatePageComponent implements OnInit {

  constructor(
    private readonly service: GoogleEventsService,
  ) { }

  ngOnInit(): void {
    return;
  }

  onChange(data: EventResource): void{
    this.service.create(data).subscribe((data) => {
      history.back();
    });
  }

  onCancel(){
    history.back();
  }
}
