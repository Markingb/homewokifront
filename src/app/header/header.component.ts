import { Component, Input, OnInit } from '@angular/core';
import {Busqueda} from "../models/Busqueda"
import {PostsService} from "../services/posts.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchedPost: any =[];

  busqueda:Busqueda ={
    cuerpo: ""
  }
  constructor(private postService:PostsService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteLS(){
    
    localStorage.removeItem("token");
    localStorage.removeItem("idPost");
    localStorage.removeItem("searchData");

  }
  buscar(){
    if(this.busqueda.cuerpo==""){
      alert("Llene todos los campos");
    }
    else{
      console.log("cuerpo busqueda")
      console.log(this.busqueda.cuerpo)
      localStorage.setItem("searchData",this.busqueda.cuerpo)
      //this.router.navigate(["/searchedpost"]);
      
      //Lo voy a pasar a otra ventana
      //this.postService.searchPost(this.busqueda).subscribe(
        //res => {
          //console.log(res);
          //this.searchedPost=res;
          //localStorage.setItem("searchData",this.searchedPost)
          ////this.router.navigate(["/viewpost"],this.searchedPost)

        //},
        //err => console.error(err)
      //);
    }
  }

}
