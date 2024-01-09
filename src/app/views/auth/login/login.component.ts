import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextfieldComponent } from '../../../components/textfield/textfield.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, TextfieldComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    // Initialize the form with FormBuilder
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    // Access form values
    console.log(this.loginForm?.value);
    // Add logic to authenticate the user
  }
}
