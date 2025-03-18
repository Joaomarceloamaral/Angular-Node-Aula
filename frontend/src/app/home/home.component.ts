import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public names: string[] = [];
  public inputName = "";
  public userForm: FormGroup;
  public isRed = true;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {}

  public saveName() {
    let newName = this.userForm.get('name')?.value;
    if (this.userForm.valid) {
      this.names.push(newName);
      this.userForm.reset();
    }
  }
}