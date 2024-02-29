import { Routes } from '@angular/router';
import { ListemsgComponent } from './components/listemsg/listemsg.component';
import { ListeprofileComponent } from './components/listeprofile/listeprofile.component';
import { VoirmsgComponent } from './components/voirmsg/voirmsg.component';
import { VoirprofileComponent } from './components/voirprofile/voirprofile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: 'listemsg', component: ListemsgComponent },
  { path: 'listeprofile', component: ListeprofileComponent },
  { path: 'voirmsg', component: VoirmsgComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'voirprofile', component: VoirprofileComponent },
];
