import { GetQuotesService } from './../../services/get-quotes.service';
import { Component, OnInit } from '@angular/core';
import { RandomQuote } from 'src/models/quote.model';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {

  quote = new RandomQuote();
  showBox: boolean = false;
  loading: boolean = false;

  constructor(private service: GetQuotesService) { }

  ngOnInit() {
  }

  randomQuote(){
    this.loading = true;

    return this.service.getRdmQuote().subscribe(res => {    

      this.quote.quote = res['value'];
      this.quote.source = res['_embedded'].source[0].url;
      this.quote.tag = res['tags'][0];
      this.quote.time = res['appeared_at'];

      this.loading = false;
      this.showBox = true;
    })
  }

}
