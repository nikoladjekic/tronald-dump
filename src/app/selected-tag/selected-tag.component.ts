import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from 'src/services/get-quotes.service';
import { SelectedTag } from 'src/models/selected-tag.model';

@Component({
  selector: 'app-selected-tag',
  templateUrl: './selected-tag.component.html',
  styleUrls: ['./selected-tag.component.css']
})

export class SelectedTagComponent implements OnInit {

  shareTagModelData: SelectedTag[] = [];

  constructor(private service: GetQuotesService) { }

  ngOnInit() {
    this.service.currentBs.subscribe(shareTagData => this.shareTagModelData = shareTagData);
  }

}
