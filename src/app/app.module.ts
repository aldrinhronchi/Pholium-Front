import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './projects/crud/crud.component';
import { ModalinfoComponent } from './projects/modalinfo/modalinfo.component';
import { UtilsComponent } from './projects/utils/utils.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProjectsComponent,
    HomeComponent,
    FooterBarComponent,
    CurriculumComponent,
    ContactComponent,
    CrudComponent,
    ModalinfoComponent,
    UtilsComponent
  ],
    imports: [
        BrowserModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'projects', component: ProjectsComponent },
        { path: 'curriculum', component: CurriculumComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'crud', component: CrudComponent },
        { path: 'utils', component: UtilsComponent },
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
