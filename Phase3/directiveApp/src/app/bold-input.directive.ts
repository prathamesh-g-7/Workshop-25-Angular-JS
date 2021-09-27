import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBoldInput]'
})
export class BoldInputDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontWeight='600'
   }

}
