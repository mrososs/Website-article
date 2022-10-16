import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-generalarticle',
  templateUrl: './generalarticle.component.html',
  styleUrls: ['./generalarticle.component.css']
})
export class GeneralarticleComponent implements OnInit {
  generalarticles:any=[];
  articlepages:any;
  page:number=1;

  constructor(private generalservices:ArticleService) { }

  ngOnInit(): void {
    this.generalservices.gnews().subscribe(
      (result)=>{
        this.generalarticles=result.articles;
        this.articlepages = result.length;
      }
    )
    
  }

}
