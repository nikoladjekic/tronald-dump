import { SelectedTag } from './../../models/selected-tag.model';
import { GetQuotesService } from 'src/services/get-quotes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tagged-people',
  templateUrl: './tagged-people.component.html',
  styleUrls: ['./tagged-people.component.css']
})

export class TaggedPeopleComponent implements OnInit {

  arr = [];
  selectedTag: string = "";
  shareTagModelData: SelectedTag[] = [];
  loading: boolean = false;
  loading2: boolean = false;
  alreadyClicked: boolean = false;


  constructor(private service: GetQuotesService, public router: Router) { }


  ngOnInit() {
    this.service.currentBs.subscribe(shareTagData => this.shareTagModelData = shareTagData);
  }

  // get the list of all tags / "click to see all tags" button
  getAllTags(){
    if (this.alreadyClicked) {
      this.loading2 = true;
      return this.service.getTagsService().subscribe(res => {
      this.arr = res['_embedded'];
      this.loading2 = false;
    })}
    else {
      this.alreadyClicked = true;
      this.loading = true;
      return this.service.getTagsService().subscribe(res => {
      this.arr = res['_embedded'];
      this.loading = false;
    })}
  }

  // click on the specific name to get the list of all tweets for that tag
  selectTag(tag){
    this.loading2 = true;

    //select the specific tag from an array of tags
    this.selectedTag = this.arr[tag];

    return this.service.searchThisTagService(this.selectedTag).subscribe(res => {

      //reset the array of tweets every time the function is invoked
      this.shareTagModelData = [];

      // set the array of tweets for selected tag
      for(let p=0; p<res['count']; p++){
        let temp = new SelectedTag();

        temp.quote = res['_embedded'].tags[p].value;
        temp.source = res['_embedded'].tags[p]._embedded.source[0].url;
        temp.time = res['_embedded'].tags[p].appeared_at;        
        temp.showed = res['count'];
        temp.total = res['total'];
        temp.tag = res['_embedded'].tags[p].tags[0];

        this.shareTagModelData.push(temp);
      }
      
      // after the click on selected tag, share the data and navigate to show tweets
      this.service.shareBs(this.shareTagModelData);
      this.router.navigate(['/selected-tag']);
      this.loading2 = false;   
    })
  }



}
