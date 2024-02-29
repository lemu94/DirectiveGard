import { Component } from '@angular/core';
import { GuardauthDirective } from '../../directive/guardauth/guardauth.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listemsg',
  standalone: true,
  imports: [GuardauthDirective],
  templateUrl: './listemsg.component.html',
  styleUrl: './listemsg.component.scss',
})
export class ListemsgComponent {}
