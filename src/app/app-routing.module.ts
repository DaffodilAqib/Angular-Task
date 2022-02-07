import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonFetchTableComponent } from './json-fetch-table/json-fetch-table.component';
import { SimpletableComponent } from './simpletable/simpletable.component';

const routes: Routes = [
  {path:"simpletable",component:SimpletableComponent},
  {path:"jsonfetchtable",component:JsonFetchTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
