import { Component, OnInit } from '@angular/core';
import { navArray } from '../nav/nav-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  navMenu: string[] = navArray;


  ngOnInit() {
  }

}
