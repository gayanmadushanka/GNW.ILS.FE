import { Component, ViewChild, Input, OnInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'ils-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  // @Input() sidenavToggle: boolean;

  constructor() { 
    
  }

  ngOnInit() {
    this.sidenav.toggle();
  }
}
