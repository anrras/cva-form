import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.scss'],
})
export class DefaultFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
      date: [''],
      number: [''],
      textarea: [''],
      select: [''],
      checkbox: [false],
      radio: [''],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
