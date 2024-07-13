import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { category, Createcate, Editcate } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http:HttpClient) {
    
   }
   getcate():Observable<category[]>{
    return this.http.get<category[]>('https://localhost:7133/api/Category/get-all')
   }
   
   postCate(data:Createcate):Observable<any>{
    console.log(data);
    
    return this.http.post<any>('https://localhost:7133/api/Category',data)
   }

   PutCate(Id:number, Data:Editcate):Observable<any>{
    console.log(Data);
    return this.http.put<any>('https://localhost:7133/api/Category/'+Id,Data)
   }
   getcateid(Id:number){
    return this.http.get<category>('https://localhost:7133/api/Category/'+Id)
   }
}
