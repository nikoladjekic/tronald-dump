import { SelectedTag } from './../../models/selected-tag.model';
import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from 'src/services/get-quotes.service';

@Component({
  selector: 'app-find-quote',
  templateUrl: './find-quote.component.html',
  styleUrls: ['./find-quote.component.css']
})
export class FindQuoteComponent implements OnInit {

  public searchKeyword: string = "";
  findQuoteModelData: SelectedTag[] = [];
  totalQuotesFound: string = "-";
  totalQuotesShowed: string = "-";
  emptyInputMessage: string = "";
  loading: boolean = false;

  constructor(private service: GetQuotesService) { }

  ngOnInit() {
  }

  findQuote(keyword){
    if (!keyword) this.emptyInputMessage = "Please enter search keyword first"
    else if (keyword.length < 3) this.emptyInputMessage = "Please type in at least three letters"
    //this.loading = true;
    else this.loading = true;
    return this.service.findQuoteService(keyword).subscribe(res => {

      // reset the search array every time the function is called
      this.findQuoteModelData = [];
      this.emptyInputMessage = "";

      // set the counter to display
      this.totalQuotesFound = res['total'];
      this.totalQuotesShowed = res['count'];

      for(let p=0; p<res['count']; p++){
        let temp = new SelectedTag();
        temp.quote = res['_embedded'].quotes[p].value;
        temp.source = res['_embedded'].quotes[p]._embedded.source[0].url;
        temp.time = res['_embedded'].quotes[p].appeared_at;        
        temp.showed = res['count'];
        temp.total = res['total'];
        temp.tag = res['_embedded'].quotes[p].tags[0];
        this.findQuoteModelData.push(temp);
      }
      this.loading = false;
    })
  }

  // enable search on enter press
  onKeydown(e, keyword) {
    if (e.key === "Enter") {
      this.findQuote(keyword);
    }
  }

}
