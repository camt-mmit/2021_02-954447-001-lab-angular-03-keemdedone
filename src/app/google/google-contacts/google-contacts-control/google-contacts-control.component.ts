import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Person } from '../../models';

@Component({
  selector: 'app-google-contacts-control',
  templateUrl: './google-contacts-control.component.html',
  styleUrls: ['./google-contacts-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GoogleContactsControlComponent,
      multi: true,
    },
    {
      provide:NG_VALIDATORS,
      useExisting: GoogleContactsControlComponent,
      multi: true,
    },
  ],
})

export class GoogleContactsControlComponent implements OnInit, OnDestroy, ControlValueAccessor, Validators {
  formGroup!: FormGroup;

  onTouched = () => {};

  private valueChanges$! : Observable<Person>;
  private readonly subscriptions: Subscription[] = [];

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      
    });
    this.valueChanges$ = this.formGroup.valueChanges /* IMPOTANT!!! if no this line, back-button(effect to registerOnChange(), ngOnDestroy() ) can't use */
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

    ['names','emailAddresses','phoneNumbers'].forEach((key)=>{
      const control = this.formGroup.get(key)!;
      if(control.errors) errors[key] = control.errors;
    });
    return errors;
  }

}
