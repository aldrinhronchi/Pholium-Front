import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {RouterModule} from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProjectsComponent,
    HomeComponent,
    FooterBarComponent
  ],
    imports: [
        BrowserModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'projects', component: ProjectsComponent },
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
