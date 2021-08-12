import {AfterContentInit, Component, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import ValidationError from "ajv/dist/runtime/validation_error";
import {Observable} from "rxjs";
import {timeout} from "rxjs/operators";


export class Element {
  public id: string;
  public name: string;
  public percentOfProduct: number;
}

export class Product {
  public id: string;
  public name: string;
  public price: number;
  public weight: number;
  public composition: Element[];
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  form: FormGroup;
  elementForm:FormArray;

  ngOnInit(): void {
    this.elementForm = new FormArray([]);
    this.form = this.formBuilder.group({
      'name': new FormControl('', Validators.required, this.nameEvenLengthValidatorAsync),
      'price': [''],
      'weight': [''],
      'elements': this.elementForm
    },{updateOn: 'blur'});
    // this.form.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });
    this.form.valueChanges.subscribe((value)=>{
      console.log(value);
    })
    console.log(this.elementForm)
  }

  onSubmit() {
    console.log(this.form);
  }

  onAddElement() {
    this.elementForm.push(this.formBuilder.group({
      'elname': [''],
      'elpercent': ['']
    }));
  }

  onDeleteElement(index: number) {
    this.elementForm.removeAt(index);
  }

  nameEvenLengthValidator(nameControl: FormControl) {
    let name: string = nameControl.value;
    if (name.length % 2 == 0) {
      return null;
    } else {
      return {
        notEven: 'name length is not even'
      }
    }
  }

  nameEvenLengthValidatorAsync(nameControl: FormControl): Promise<any> | Observable<any> {
    const name: string = nameControl.value;

    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (name.length % 2 == 0) {
          resolve(null);
        } else {
          resolve({notEven: 'name length is not even'})
        }
      }, 1500);
    });
  }
}



