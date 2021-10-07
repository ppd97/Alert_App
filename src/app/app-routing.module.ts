import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertListComponent } from './alert-list/alert-list.component';
import { DataDisplayComponent } from './data-display/data-display.component';


const routes: Routes = [
  {path:'',redirectTo:'alert-List',pathMatch:'full'},
  {path:'alert-List',component:AlertListComponent},
  {path:'datadisplay/:area',component:DataDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
