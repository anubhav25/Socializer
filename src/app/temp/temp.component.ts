import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles: [``]
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    handleFile(event, text) {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            text.value = '';
            text.disabled = true;
           console.log(fileList);
        }
    }
}
