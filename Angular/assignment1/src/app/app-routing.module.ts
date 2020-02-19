import { DetailsComponent } from "./details/details.component";
import { ListComponent } from "./list/list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "list",
    component: ListComponent,
    data: { title: "List of Products" }
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    data: { title: "Product Details" }
  },

  { path: "", redirectTo: "/list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
