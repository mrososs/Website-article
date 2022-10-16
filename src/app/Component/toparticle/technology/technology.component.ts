import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  newsarticle :any=[];
  articlepages : any;
  page:number=1;

  constructor(private technologyservice:ArticleService) { }

  ngOnInit(): void {

    this.technologyservice.techNews().subscribe(
      (result)=>{
        console.log(result);
        this.articlepages = result.length;
        this.newsarticle = result.articles;

      }
    )

    
  }

}
