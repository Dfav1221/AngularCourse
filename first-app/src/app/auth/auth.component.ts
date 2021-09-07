import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {readSpanComment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/comments";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;

  form: FormGroup;
  error: string;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {

    this.form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)])
      }
    );


  }

  onSubmit() {
    if (this.form.invalid)
      return;

    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.isLoading = true;

    if (this.isLoginMode)
      this.login(email, password);
    else {
      this.register(email, password);
    }

  }

  private login(email: string, password: string) {
    this.authService
      .login(email, password)
      .subscribe(
        response => {
          this.isLoading = false;
        },
        error => {
          this.error = error;
          console.log(error);
          this.isLoading = false;
        }
      );
    this.form.reset();
  }

  private register(email: string, password: string) {

    this.authService
      .signup(email, password)
      .subscribe(
        response => {
          this.isLoading = false;
        },
        error => {
          console.log(error)
          this.error=error;
          this.isLoading = false;
        }
      );
    this.form.reset();
  }
}
