import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ils-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title: string = 'Integrated Legal System';
  
  constructor() { }

  ngOnInit() {
  }

}
