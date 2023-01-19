import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrls: ['./livescore.component.scss']
})
export class LivescoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getTodoById()
  }
  getTodoById(){

    axios.get("https://v3.football.api-sports.io/",{
      "method":"get",
      "headers":{
        "x-rapidapi-host":" https://v3.football.api-sports.io"
      }
    }).then(
      res=>{
        // console.log(res.data)
        // this.todos=res.data.Todos
        // this.idtodos=res.data.Todos._id
        // console.log(this.idtodos)
        // this.router.navigate(['todos/modifier/'+this.idtodos]);
    
    
      }
    ).catch(
      err=>{
        console.log(err)
      }
    )
    
    }
}
