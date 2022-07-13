import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(route:string){
    this.featureSelected.emit(route);
  }
}
