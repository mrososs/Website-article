import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-bussinessarticle',
  templateUrl: './bussinessarticle.component.html',
  styleUrls: ['./bussinessarticle.component.css']
})
export class BussinessarticleComponent implements OnInit {
  bussinessarticle : any=[];
  articlepages : any;
  page:number=1;

  constructor(private bussinessservice:ArticleService) { }

  ngOnInit(): void {

    this.bussinessservice.bnews().subscribe(
      (result)=>{
        console.log(result);
        this.articlepages = result.length;
        this.bussinessarticle = result.articles;
      }
    )
  }

}
