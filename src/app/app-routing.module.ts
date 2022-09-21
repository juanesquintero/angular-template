import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './shared/constants';


const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    runGuardsAndResolvers: 'always',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
