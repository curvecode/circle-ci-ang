import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appDragDrop]'
})
export class DrapDropDirective {

  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff';
  @HostBinding('style.opacity') private opacity = '1';

  // Dragover listener
  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
    const files: any = [];
    for (let i = 0; i < evt.dataTransfer.files.length; i++) {
      const file = evt.dataTransfer.files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      file['url'] = url;
      files.push(file);
    }
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

  constructor(private sanitizer: DomSanitizer) { }

}
export interface FileHandle {
  file: File;
  url: SafeUrl;
}
