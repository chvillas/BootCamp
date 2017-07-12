import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'My application';
  author = 'Christian Villa'
  count = 0;
  imgSource = './../favicon.ico';
  active:boolean = false;
}
