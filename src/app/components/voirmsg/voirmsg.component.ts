import { Component } from '@angular/core';
import { GuardauthDirective } from '../../directive/guardauth/guardauth.directive';
import { MajDirective } from '../../directive/maj/maj.directive';

@Component({
  selector: 'app-voirmsg',
  standalone: true,
  imports: [GuardauthDirective, MajDirective],
  templateUrl: './voirmsg.component.html',
  styleUrl: './voirmsg.component.scss',
})
export class VoirmsgComponent {}
