import { ActivatedRoute, Routes } from '@angular/router';
import { category, Editcate } from './../../../models/category.model';
import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { error } from 'console';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
Id: any;
constructor(private Cate:CategoryService , private Routes:ActivatedRoute){

}
Name: string = "";
ngOnInit() {
  this.Id = Number(this.Routes.snapshot.paramMap.get('id'));
  this.getcateid();
}
  
getcateid(){
  this.Cate.getcateid(this.Id).subscribe(
    (res:category) => {
      this.Name=res.name
    }

  )
}
Editcate(){
    let Nameca: Editcate ={
      name: this.Name,
    }
    console.log(Nameca.name, this.Id);
    this.Cate.PutCate(this.Id,Nameca).subscribe(
      (Nameca) => {console.log(Nameca)},
      (error) => {console.log(error)}
      )
    
    
  }

}
