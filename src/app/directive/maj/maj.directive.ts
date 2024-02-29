import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaj]',
  standalone: true,
})
export class MajDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('keyup', ['$event']) onKeyUp(e: KeyboardEvent) {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }
}
