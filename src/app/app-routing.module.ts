import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientmeetingComponent } from './clientmeeting/clientmeeting.component';

const routes: Routes = [
  {path: "client", component: ClientComponent},
  {path: "clientmeeting", component: ClientmeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
