import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { ArticlesService } from './services/articles.service';
import { GuiasService } from './services/guias.service';
import { VideosService } from './services/videos.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PlanComponent } from './components/plan/plan.component';
import { GuiasComponent } from './components/guias/guias.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { VideosComponent } from './components/videos/videos.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlanComponent,
    GuiasComponent,
    ReglamentoComponent,
    VideosComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ArticlesService,
    GuiasService,
    VideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
