import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://ogimg.infoglobo.com.br/in/10983216-c47-e33/FT1086A/image6179363022565480253.jpg"
  contentTitle:string="Minha noticia"
  contentDescription:string="Ola mundo"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => console.log(value.get("id")))
  }

}
