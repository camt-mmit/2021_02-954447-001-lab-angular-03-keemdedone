import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { map, Observable, Subscription } from 'rxjs';
import { EventResource } from '../../models';

@Component({
  selector: 'app-google-event-control',
  templateUrl: './google-event-control.component.html',
  styleUrls: ['./google-event-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GoogleEventControlComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: GoogleEventControlComponent,
      multi: true
    },
  ],
})

export class GoogleEventControlComponent implements OnInit, OnDestroy, ControlValueAccessor, Validators {
  formGroup!: FormGroup;

  onTouched = () => {};

  private valueChanges$! : Observable<EventResource>;
  private readonly subscriptions: Subscription[] = [];

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      summary: [null, [Validators.required]],
      start: this.fb.group({
        dateTime: [null, [Validators.required]],
      }),
      end: this.fb.group({
        dateTime: [null,[Validators.required]],
      }),
    });

    this.valueChanges$ = this.formGroup.valueChanges.pipe(
      map((data) => {
        if(data.start?.dateTime){
          data.start.dateTime = new Date(data.start.dateTime).toISOString();
        }

        if(data.end?.dateTime){
          data.end.dateTime = new Date(data.end.dateTime).toISOString();
        }
        return data;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  writeValue(value: any): void {
    if(value){
      this.formGroup.setValue(value, { emitEvent: false });
    };
  }

  registerOnChange(onChange: any): void {
    const sub = this.valueChanges$.subscribe(onChange);
    this.subscriptions.push(sub);
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void{
    if(isDisabled){
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  validate(parentControl: AbstractControl): ValidationErrors | null {
    if(!this.formGroup.invalid){
      return null;
    }

    let errors: ValidationErrors = {...this.formGroup.errors};

    ['summary','start.dateTime','end.dateTime'].forEach((key)=>{
      const control = this.formGroup.get(key)!;
      if(control.errors) errors[key] = control.errors;
    });
    return errors;
  }

}
