import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-cartel',
  templateUrl: './big-cartel.component.html',
  styleUrls: ['./big-cartel.component.css']
})
export class BigCartelComponent implements OnInit {
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
