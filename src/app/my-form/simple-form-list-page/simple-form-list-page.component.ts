import { Component,OnInit } from '@angular/core';
import { SimpleFormDataService } from '../simple-form-data.service';

@Component({
  selector: 'app-simple-form-list-page',
  templateUrl: './simple-form-list-page.component.html',
  styleUrls: ['./simple-form-list-page.component.scss']
})
export class SimpleFormListPageComponent implements OnInit {

  constructor(
    public dataService: SimpleFormDataService,
  ) { }

  ngOnInit(): void {
    return;
  }

}
