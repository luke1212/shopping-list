import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveTsDirective {

  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
