import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string= "Mi proyecto en Angular"

constructor() { }

ngOnInit(): void {

}
toggleAddTask(){
  console.log("Tarea Añadida!");
}
}