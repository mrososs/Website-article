import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-entarticle',
  templateUrl: './entarticle.component.html',
  styleUrls: ['./entarticle.component.css']
})
export class EntarticleComponent implements OnInit {
  entarticles:any=[];
  articlepages: any;
  page : number=1;

  constructor(private entservice:ArticleService) { }

  ngOnInit(): void {
    this.entservice.enews().subscribe(
      (result)=>{
        this.entarticles=result.articles;
        this.articlepages = result.length;

        
      }
    )
  }

}
