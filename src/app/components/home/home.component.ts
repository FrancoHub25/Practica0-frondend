import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myimage1:string = "assets/img/log1.png";

  constructor() {
  }

  ngOnInit(): void {
  }

}
