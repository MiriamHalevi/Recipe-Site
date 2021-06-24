import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(public http:HttpClient) { 
  }
  getAllCategory(){
      return this.http.get<Category[]>("https://localhost:44358/api/category/allCategory");
  }
  getCategoryByCode(code):Observable<any>{
    return this.http.post<Category>("https://localhost:44358/api/category/categoryByCode",code);
  }
}
