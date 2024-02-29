import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Directive({
  selector: '[appGuardauth]',
  standalone: true,
})
export class GuardauthDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  private showHide() {
    this.activatedRoute.queryParams.subscribe((data: Params) => {
      this.render.setStyle(this.el.nativeElement, 'display', '');
      if (this.verif(data) == true) {
        this.render.setStyle(this.el.nativeElement, 'display', 'none');
        this.router.navigateByUrl('notfound');
      }
    });
  }
  private verif(data: Params): boolean {
    if (data['type'] != 'admin') {
      return true;
    }
    return false;
  }
  ngOnInit(): void {
    this.showHide();
  }
}
