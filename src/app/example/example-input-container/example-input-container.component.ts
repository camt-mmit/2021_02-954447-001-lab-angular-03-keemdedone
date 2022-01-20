import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-example-input-container',
  templateUrl: './example-input-container.component.html',
  styleUrls: ['./example-input-container.component.scss']
})
export class ExampleInputContainerComponent implements OnInit {

  @Input() value: number | null = null; //set null = null to fix err
  @Output() update = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    return;
  }

  onUpdate(value:number): void{
    this.update.emit(value);

  }

}
