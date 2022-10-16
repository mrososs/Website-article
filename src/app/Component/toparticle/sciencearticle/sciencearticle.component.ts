import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-sciencearticle',
  templateUrl: './sciencearticle.component.html',
  styleUrls: ['./sciencearticle.component.css']
})
export class SciencearticleComponent implements OnInit {

  sciencearticles :any=[];
  articlepages:any;
  page: number=1;
  constructor(private scienceservice:ArticleService) { }

  ngOnInit(): void {
    this.scienceservice.snews().subscribe(
      (result)=>{
        console.log(result);
        this.articlepages = result.length;
        this.sciencearticles=result.articles;

      }
    )
  }

}
