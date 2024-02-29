import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListemsgComponent } from './components/listemsg/listemsg.component';
import { VoirmsgComponent } from './components/voirmsg/voirmsg.component';
import { VoirprofileComponent } from './components/voirprofile/voirprofile.component';
import { ListeprofileComponent } from './components/listeprofile/listeprofile.component';
import { GuardauthDirective } from './directive/guardauth/guardauth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListemsgComponent,
    VoirmsgComponent,
    VoirprofileComponent,
    ListeprofileComponent,
    RouterModule,
    GuardauthDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DirectiveGard';
}
