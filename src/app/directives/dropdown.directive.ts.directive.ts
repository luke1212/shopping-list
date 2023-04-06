import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveTsDirective {

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) { }

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}