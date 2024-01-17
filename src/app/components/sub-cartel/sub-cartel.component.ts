import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-cartel',
  templateUrl: './sub-cartel.component.html',
  styleUrls: ['./sub-cartel.component.css']
})
export class SubCartelComponent implements OnInit {
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
