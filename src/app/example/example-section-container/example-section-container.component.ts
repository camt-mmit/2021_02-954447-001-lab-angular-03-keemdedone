import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-section-container',
  templateUrl: './example-section-container.component.html',
  styleUrls: ['./example-section-container.component.scss']
})
export class ExampleSectionContainerComponent implements OnInit {
  @Input() items: {value :number}[] | null = null; //null for fix err emtry value
  @Output() update = new EventEmitter<{index:number,value:number}>();
  @Output() add = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    return;
  }

  onUpdate(index:number,value:number): void{
    this.update.emit({index:index, value:value});
  }

  addInput(): void{
    this.add.emit(null);
  }

  delInput(index:number): void{
    this.delete.emit(index);
  }
}
