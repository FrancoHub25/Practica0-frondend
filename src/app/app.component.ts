import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

var jsfeat = require("../assets/js/script.js");
var jsgal = require("../assets/js/gal.js");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Practica0-frondEnd0';

  constructor(http: HttpClient ){

    console.log(jsfeat);
    console.log(jsgal);
  }
}
