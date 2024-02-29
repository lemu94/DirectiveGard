import { Component } from '@angular/core';
import { GuardauthDirective } from '../../directive/guardauth/guardauth.directive';

@Component({
  selector: 'app-voirprofile',
  standalone: true,
  imports: [GuardauthDirective],
  templateUrl: './voirprofile.component.html',
  styleUrl: './voirprofile.component.scss',
})
export class VoirprofileComponent {}
