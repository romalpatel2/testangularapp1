import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective {

  constructor(private _elementRef: ElementRef) { 
  //_renderer.setElementStyle(_elementRef.nativeElement, 'color', 'green');               
}

}
