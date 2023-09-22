import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPeopleComponent } from './components/edit-people/edit-people.component';

const routes: Routes = [
  { path: "updatePersonalDetails", component: EditPeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
