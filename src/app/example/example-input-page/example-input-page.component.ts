import { Component, OnInit } from '@angular/core';
import { ExampleDataService } from '../example-data.service';

@Component({
  selector: 'app-example-input-page',
  templateUrl: './example-input-page.component.html',
  styleUrls: ['./example-input-page.component.scss']
})
export class ExampleInputPageComponent implements OnInit {


  constructor(public readonly dataService:ExampleDataService) { }

  ngOnInit(): void {
    return;
  }

}
