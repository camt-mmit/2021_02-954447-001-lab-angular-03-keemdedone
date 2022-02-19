import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventResource } from '../../models';

@Component({
  selector: 'app-google-event-form',
  templateUrl: './google-event-form.component.html',
  styleUrls: ['./google-event-form.component.scss']
})
export class GoogleEventFormComponent implements OnInit {
  @Input() data: EventResource | null = null;

  @Output() dataChange = new EventEmitter<EventResource>();
  @Output() cancel = new EventEmitter<void>();


  errorMsg: string | null = null;
  formGroup! : FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      eventResource : [this.data, [Validators.required]],
    });
  }

  onSubmit(): void{
    this.errorMsg = null;
    if(this.formGroup.invalid){
      this.errorMsg = 'Invalid form data!!!'
    } else {
      const control = this.formGroup.get('eventResource')!;
      this.dataChange.emit(control.value)
    }
  }

  onCancel(): void{
    this.cancel.emit();
  }

}
