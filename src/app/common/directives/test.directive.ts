import { Directive,ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[testdirective]'
})
export class TestDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() { 
  this.elementRef.nativeElement.innerHTML ='<h1>test directive text details</h1>';
  }

}
