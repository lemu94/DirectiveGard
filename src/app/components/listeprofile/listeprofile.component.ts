import { Component } from '@angular/core';
import { GuardauthDirective } from '../../directive/guardauth/guardauth.directive';

@Component({
  selector: 'app-listeprofile',
  standalone: true,
  imports: [GuardauthDirective],
  templateUrl: './listeprofile.component.html',
  styleUrl: './listeprofile.component.scss',
})
export class ListeprofileComponent {}
