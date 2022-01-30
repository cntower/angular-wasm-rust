import {Component} from '@angular/core';
import pkg from 'package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rust-wasm' + '@' + JSON.stringify(pkg.version);
}
