import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from 'src/services/get-quotes.service';

@Component({
  selector: 'app-random-meme',
  templateUrl: './random-meme.component.html',
  styleUrls: ['./random-meme.component.css']
})
export class RandomMemeComponent implements OnInit {

  meme: String = "https://api.tronalddump.io/random/meme";
  loading: boolean = false;

  constructor(private service: GetQuotesService) { }

  ngOnInit() {
    return this.meme;
  }

  // reload the page to get the new meme
  getMeme(): void {
    this.loading = true;
    window.location.reload();
    this.loading = false;
  } 

}
