import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-allarticle',
  templateUrl: './allarticle.component.html',
  styleUrls: ['./allarticle.component.css']
})
export class AllarticleComponent implements OnInit {
  allarticlenews :any =[];
  articlepages : any;
  page:number=1;
  search='';

  constructor(private allarticleservice:ArticleService) { }

  ngOnInit(): void {
    this.allarticleservice.allarticle().subscribe(
      (result)=>{
        console.log(result);
        this.articlepages = result.length;
        
        this.allarticlenews=result.articles;
      }
    )

  }
  Search(){
    this.allarticleservice.allarticle().subscribe(
      (result) => {
        console.log(result);
        this.articlepages = result.length;
        this.allarticlenews = result.articles;
        const regex = new RegExp(`${this.search}`, 'gi');
        this.allarticlenews = this.allarticlenews.filter(
          (item: any) => {
            return item.title.match(regex) || item.publishedAt.match(regex);
            
            
          }
        );
      }
    )
    console.log(this.allarticlenews);

  }
  
  }
