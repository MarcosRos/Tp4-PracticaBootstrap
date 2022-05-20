import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';

const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'page1', component: Page1Component },
  { path: 'pagea', component: PageaComponent },
  { path: 'pageb', component: PagebComponent },
  { path: 'pagec', component: PagecComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
