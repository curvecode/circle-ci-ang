import { Component } from '@angular/core';
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is new test from comp';
  content = 'This is content from page';
  another_content = 'This is another content';

  constructor() {}
}
