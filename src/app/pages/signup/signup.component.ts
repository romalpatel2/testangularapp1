import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input('master') masterName: string;

  fruit = ['Apples', 'Oranges', 'Bananas', 'Limes', 'Lemons'];

  isVisible = false;
  testoneway: string = 'Angular JS2';

  public form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
  });

  ngOnInit() {
  }

  formSubmit(event) {
    console.log(this.form.controls.firstname.value);
    console.log(this.form.controls.lastname.value);
    this.isVisible=true;
    //this._router.navigate(['/home']);
  }
  

}
