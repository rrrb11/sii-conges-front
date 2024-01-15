import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextfieldComponent } from '../../../components/textfield/textfield.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../components/button/button.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserClass } from '../../../classes/user.class';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, TextfieldComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    
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
    const val = this.loginForm.value;

        if (val.email && val.password) {
            this.authService.login(this.loginForm.value)
              ?.then(response => {
                console.log(response);
                const { accessToken, refreshToken, email, firstname, lastname } = response.data;
                UserClass.setUser({accessToken, refreshToken, email, firstname, lastname})
                this.router.navigateByUrl('/');
              })
              .catch((error) => {
                console.log(error.response.data)
                // toast.error(error.response.data.message);
              });

        }
    // Add logic to authenticate the user
  }
}
