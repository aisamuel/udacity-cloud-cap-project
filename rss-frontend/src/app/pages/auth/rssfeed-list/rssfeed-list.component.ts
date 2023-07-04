import { Component, OnInit } from '@angular/core';
import { AuthService, RssFeed } from '../services/auth.service';

@Component({
  selector: 'app-rssfeed-list',
  templateUrl: './rssfeed-list.component.html',
  styleUrls: ['./rssfeed-list.component.scss']
})
export class RssfeedListComponent implements OnInit {
  public rssFeeds: RssFeed[] = [];

  constructor(
    private authService: AuthService
  ) { 
    this.getRssFeeds()
  }

  ngOnInit(): void {
  }

  getRssFeeds() {
    this.authService.getRssFeeds().subscribe(
      (res: any) => {
        console.log(res)
        this.rssFeeds = res;
      },
      (error) => {
        console.log(error)
      }
    );

  }

}
