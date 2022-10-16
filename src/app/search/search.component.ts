import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(searchservice:ArticleService) { }

  ngOnInit(): void {  
  }

  filter(queryString : string){


  }
  
}
