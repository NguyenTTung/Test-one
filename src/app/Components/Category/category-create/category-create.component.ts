import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Createcate } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
import { error } from 'console';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {
  constructor(private Cate:CategoryService){

  }
  Name: string= "";
  createcate(){
    let Namecate: Createcate = {
      name: this.Name
    }
    console.log(Namecate);
    
    this.Cate.postCate(Namecate).subscribe(
      (ccate) => {console.log(ccate)},
      (error) => {console.log(error)}
    )
  }


}
