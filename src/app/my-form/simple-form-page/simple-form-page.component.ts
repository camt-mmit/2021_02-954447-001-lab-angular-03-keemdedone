import { Component, OnInit } from '@angular/core';
import { SimpleFormDataService } from '../simple-form-data.service';

@Component({
  selector: 'app-simple-form-page',
  templateUrl: './simple-form-page.component.html',
  styleUrls: ['./simple-form-page.component.scss']
})
export class SimpleFormPageComponent implements OnInit {

  constructor(
    public dataService: SimpleFormDataService
  ) { }

  ngOnInit(): void {
    return;
  }

}
