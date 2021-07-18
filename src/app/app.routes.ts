import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { PlanComponent } from './components/plan/plan.component';
import { GuiasComponent } from './components/guias/guias.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { VideosComponent } from './components/videos/videos.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'planarea', component: PlanComponent },
    { path: 'guias', component: GuiasComponent },
    { path: 'reglamento', component: ReglamentoComponent },
    { path: 'videos', component: VideosComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true })

