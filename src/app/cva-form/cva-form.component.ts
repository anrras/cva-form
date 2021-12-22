import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cva-form',
  templateUrl: './cva-form.component.html',
  styleUrls: ['./cva-form.component.scss'],
})
export class CvaFormComponent implements OnInit {
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
