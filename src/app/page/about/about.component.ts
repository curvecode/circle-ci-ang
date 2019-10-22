import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/service/userService';

declare let $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  results = [];
  info: any;
  private jquery: any;

  constructor(private userService: UserService) {
    this.jquery = $;
  }

  ngOnInit() {
    this.fetchUserList();
  }

  fetchUserList() {
    this.userService.fetchUserList(500).then((result) => {
      console.log(result);
      if (result) {
        this.info = result.info;
        this.results = result.results;
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  openModal() {
    console.log(this.jquery)
  }

}
