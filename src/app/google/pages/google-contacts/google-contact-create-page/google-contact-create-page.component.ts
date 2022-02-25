import { Component, OnInit } from '@angular/core';
import { GoogleContactsService } from 'src/app/google/google-contacts.service';
import { Person } from 'src/app/google/models';

@Component({
  selector: 'app-google-contact-create-page',
  templateUrl: './google-contact-create-page.component.html',
  styleUrls: ['./google-contact-create-page.component.scss']
})
export class GoogleContactCreatePageComponent implements OnInit {

  constructor(
    private readonly service: GoogleContactsService
  ) { }

  ngOnInit(): void {
    return;
  }

  onChange(data: Person): void{
    this.service.create(data).subscribe((data:any) => {
      history.back();
    });
  }

  onCancel(){
    history.back();
  }

}
