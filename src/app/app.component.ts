import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  showId : boolean;
  myData : any;
  username : string;

  constructor(private http: Http) {
    this.username = "";
    this.showId = false;
  }

  toggleLoader() {
    this.showId = !this.showId;
  }

  onKey(event: any) {
    if(event.keyCode == 13) {
      this.username = event.target.value;
      this.toggleLoader();
      this.http.get('https://twg-api.herokuapp.com/api/genre?username='+this.username)
      .map(response => response.json())
      .subscribe(res => {
        this.myData = JSON.stringify(res);
        this.toggleLoader();
        console.log(this.myData)
      });

    }
  }

  // constructor(private https: Http) {
  //   this.https.get('http://book-bot-ai.herokuapp.com/api/download?hash=CD2CB86351480A1FF50B95F008CC9552')
  //     .map(response => response.json())
  //     .subscribe(res => this.myData = res);
  // }
}
