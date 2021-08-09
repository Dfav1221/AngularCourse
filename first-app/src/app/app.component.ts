import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ProjectOptions = ['stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required],this.projectNameValidator),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'status': new FormControl('stable')
    });
  }

  projectNameValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({'projectNameInvalid': true});
        } else {
          return null;
        }
      }, 1500);
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
