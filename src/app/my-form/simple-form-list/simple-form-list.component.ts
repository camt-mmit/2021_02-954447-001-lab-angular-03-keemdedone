import { Component, Input, OnInit } from '@angular/core';
import { SimpleFormData } from '../simple-form/simple-form.component';

@Component({
  selector: 'app-simple-form-list',
  templateUrl: './simple-form-list.component.html',
  styleUrls: ['./simple-form-list.component.scss']
})
export class SimpleFormListComponent implements OnInit {
  @Input() data: SimpleFormData | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}
