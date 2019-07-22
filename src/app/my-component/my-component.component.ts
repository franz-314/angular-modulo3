import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  private information: object ;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.getQuotes();
  }

  getQuotes(){
    return this.quotesService.getQuotes()
    .subscribe( data =>{
      this.information = data ;
      return data;
    });
  }
}
