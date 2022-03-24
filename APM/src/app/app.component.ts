import { Component } from "@angular/core";

@Component({
  template:`
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>`,
  styleUrls: [],
  selector: 'pm-root'
})

export class AppComponent {
  pageTitle: String = 'Acme Product Management';
}
