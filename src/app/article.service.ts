import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
 
 
  providedIn: 'root'


})
export class ArticleService {
  


  constructor(private http:HttpClient) {}
  // public getArticle(){
  //   let myData = this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=74b54a756d704a4a89579016f486a57b')
  //   return myData; 
  // }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=74b54a756d704a4a89579016f486a57b";
  newsTechnologyUrl = "https://newsapi.org/v2/top-headlines?category=technology&apiKey=74b54a756d704a4a89579016f486a57b";
  newsbUrl = "https://newsapi.org/v2/top-headlines?category=business&apiKey=74b54a756d704a4a89579016f486a57b";
  newseUrl = "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=74b54a756d704a4a89579016f486a57b";
  newsgUrl = "https://newsapi.org/v2/top-headlines?category=general&apiKey=74b54a756d704a4a89579016f486a57b";
  newshUrl = "https://newsapi.org/v2/top-headlines?category=health&apiKey=74b54a756d704a4a89579016f486a57b";
  newssUrl = "https://newsapi.org/v2/top-headlines?category=science&apiKey=74b54a756d704a4a89579016f486a57b";
  newssportsUrl = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=74b54a756d704a4a89579016f486a57b";
  allarticleUrl=" https://newsapi.org/v2/everything?q=bitcoin&apiKey=74b54a756d704a4a89579016f486a57b";
  
  
  topHeading(): Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }

  techNews() : Observable<any>
  {

      return this.http.get(this.newsTechnologyUrl);
  }

  bnews(): Observable<any>
  {
    return this.http.get(this.newsbUrl); 
  }
  enews(): Observable<any>
  {
    return this.http.get(this.newseUrl); 
  }
  gnews(): Observable<any>
  {
    return this.http.get(this.newsgUrl); 
  }
  hnews(): Observable<any>
  {
    return this.http.get(this.newshUrl); 
  }
  snews(): Observable<any>
  {
    return this.http.get(this.newssUrl); 
  }
  sportsnews(): Observable<any>
  {
    return this.http.get(this.newssportsUrl); 
  }

  allarticle(): Observable<any>
  {
    return this.http.get(this.allarticleUrl);
  }

  getUsers(news:string) :Observable<any>{
    return this.http.get(`${this.newsApiUrl}/news/search?q=${news}`)
  }
  





}
