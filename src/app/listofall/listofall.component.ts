import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listofall',
  templateUrl: './listofall.component.html',
  styleUrls: ['./listofall.component.css']
})
export class ListofallComponent implements OnInit {
  listofall = ["Characters","Species","Planets","Movies","Starships"] ;
  sss = new Array();


  constructor() {
  }

  ngOnInit(){
  }

  public captureitem(item: any) {
  }

}
