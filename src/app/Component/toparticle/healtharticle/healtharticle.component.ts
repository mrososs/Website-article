import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-healtharticle',
  templateUrl: './healtharticle.component.html',
  styleUrls: ['./healtharticle.component.css']
})
export class HealtharticleComponent implements OnInit {
  healtharticles:any=[];
  articlepages:any;

  page:number=1;


  constructor(private healthservice:ArticleService) { }

  ngOnInit(): void {
    this.healthservice.hnews().subscribe(
      (result)=>{
        this.articlepages = result.length;
        this.healtharticles=result.articles;
      }
    )
  }


}
