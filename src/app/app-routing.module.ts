import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryIndexComponent } from './Components/Category/category-index/category-index.component';
import { CategoryCreateComponent } from './Components/Category/category-create/category-create.component';
import { CategoryEditComponent } from './Components/Category/category-edit/category-edit.component';

const routes: Routes = [
  {path:'',component:CategoryIndexComponent,title:'Danh muc'},
  {path:'themdanhmuc',component:CategoryCreateComponent,title:'Tao danh muc'},
  {path:'suadanhmuc/:id',component:CategoryEditComponent,title:'SuaDanhMuc'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
