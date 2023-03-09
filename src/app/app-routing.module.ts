import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './mycomponents/add-details/add-details.component';
import { HomepageComponent } from './mycomponents/homepage/homepage.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
},
{
  path: 'add-details',
  component: AddDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
