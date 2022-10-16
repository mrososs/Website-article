import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-sportsarticle',
  templateUrl: './sportsarticle.component.html',
  styleUrls: ['./sportsarticle.component.css']
})
export class SportsarticleComponent implements OnInit {
  sportarticle : any=[];
  articlepages :any;
  page : number=1;
  constructor(private sportsservice:ArticleService) { }

  ngOnInit(): void {
    this.sportsservice.sportsnews().subscribe(
      (result)=>{
        this.sportarticle=result.articles;
        this.articlepages = result.length;
      }
    )
  }

}
