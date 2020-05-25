import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testangularapp';

  clickMessage = '';
  name;


  ngOnInit() {
    console.log('calling ngOnInit...........');
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    console.log(this.name);
    
  }

}
