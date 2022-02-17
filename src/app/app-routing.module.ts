import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from "./badges/badges.component";

const routes: Routes = [
  { path: '', component: BadgesComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
