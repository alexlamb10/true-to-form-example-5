import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public form: FormGroup = this._fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this._fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),
  });
  public formUpdates$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map((value) => {
      return {
        ...value,
        valid: this.form.valid,
      };
    })
  );

  constructor(private _fb: FormBuilder) {}
}
