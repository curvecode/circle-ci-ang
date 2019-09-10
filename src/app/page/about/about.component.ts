import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/service/userService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  results = [];
  info: any;
  constructor(private userService: UserService) { }

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

}
