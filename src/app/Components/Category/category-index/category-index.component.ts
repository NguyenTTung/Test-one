import { CategoryService } from './../../../services/category.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../../../models/category.model';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrl: './category-index.component.css'
})
export class CategoryIndexComponent implements OnInit {
  constructor(private Cate:CategoryService){

  }
  ngOnInit(): void {
    this.catetest();

  }
  listcate:category[] = [];
  catetest(){
    this.Cate.getcate().subscribe((car)=> {
      this.listcate = car
      console.log(car);   
    } )
  }


}
