import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  files: any = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      if (!element.url) {
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(element));
        element['url'] = url;
      }
      this.files.push(element);
    }
    console.log(this.files);
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
