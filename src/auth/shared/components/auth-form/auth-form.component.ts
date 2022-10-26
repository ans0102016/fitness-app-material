import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output()
  submitted = new EventEmitter<FormGroup>();

  form!: FormGroup;

  get emailControl() {
    return this.form.get('email') as FormControl;
  }

  get passwordControl() {
    return this.form.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.submitted.emit(this.form);
    }
  }
}
