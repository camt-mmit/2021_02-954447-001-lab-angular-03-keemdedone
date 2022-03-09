import { Component, OnInit } from '@angular/core';
import { ExampleDataService, ExampleSection } from '../example-data.service';

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

  totalInput(items:ExampleSection): number{
    return items.reduce((carry,item)=> carry + item.value,0)
  }

}
