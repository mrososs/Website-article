import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { filter } from 'rxjs';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-toparticle',
  templateUrl: './toparticle.component.html',
  styleUrls: ['./toparticle.component.css']
})
export class ToparticleComponent implements OnInit {
  
 
  
  constructor(private articleservice : ArticleService) { }
  
  filternews :any=[];
  resultData: any = [];
  AllArticles: any = [];

  search = '';
  sort = '';
 
  noresult = false;
  toparticle : any=[];
  articlepages : any;
  page:number=1;
  filterby: any ;
  
    ngOnInit(): void {
  
      this.articleservice.topHeading().subscribe(
        (result) => {
          console.log(result);
          this.articlepages = result.length;
          this.toparticle = result.articles;
          const regex = new RegExp(`${this.search}`, 'gi');
          this.toparticle = this.toparticle.filter(
            (item: any) => {
              return item.title.match(regex) || item.publishedAt.match(regex);
              
              
            }
          );
        }
      )
  
      
      console.log(this.toparticle);
    
    
    
    
    }
    Search(){
      this.articleservice.topHeading().subscribe(
        (result) => {
          console.log(result);
          this.articlepages = result.length;
          this.toparticle = result.articles;
          const regex = new RegExp(`${this.search}`, 'gi');
          this.toparticle = this.toparticle.filter(
            (item: any) => {
              return item.title.match(regex) || item.publishedAt.match(regex);
              
              
            }
          );
        }
      )
      console.log(this.toparticle);

    }
  }
        
    

    


  
   

  


    

  

  
  
  
  
  
 
  