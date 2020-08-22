import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categoris',
  templateUrl: './categoris.component.html',
  styleUrls: ['./categoris.component.css']
})
export class CategorisComponent implements OnInit {
categories:any={};


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.http.get('http://localhost:5000/category/').subscribe(
          response=>{this.categories=response;} ,error=>{console.log(error);})

      }


}
