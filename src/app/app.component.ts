import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import _ from "lodash";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tweet2Genre';
  sub = "Analyse your tweet's topic!";
  showId : boolean;
  gData : any;
  username : string;
  showResult : boolean;
  error : string;
  showError : boolean;
  selectedOption: string;
  windowH : any;
  windowW : any;

  public pie_ChartOptions;

  public gauge_ChartOptions;

  pie_ChartData  = [["Topic", "Values"]];

  constructor(private http: Http) {
    this.username = "";
    this.showId = false;
    this.showResult  = false;
    this.error = "";
    this.showError  = false;

    if (window.innerWidth < 600) {
      this.windowH = 550
      this.windowW = window.innerWidth;
    } else {
      this.windowH = 550
      this.windowW = 700
    }

    this.pie_ChartOptions = {
        title: 'Tweets Genre',
        width: this.windowW-50,
        height:this.windowH
    };

    this.gauge_ChartOptions = {
        width: this.windowW-100, height: this.windowH-100,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
    };
    console.log(this.windowH, this.windowW);
  }


  public gauge_ChartData = [['Label', 'Value']];

  toggleError(e: string) {
    this.error = e;
    this.showError = true;
  }

  onKey(event: any) {
    console.log(event)
    console.log(event)
    if(event.keyCode == 13 && event.target.value !== "") {
      event.target.blur();
      this.pie_ChartData  = [["Topic", "Values"]];
      this.gauge_ChartData = [
        ['Label', 'Value']];
      this.username = event.target.value;
      this.showId = true;
      this.showError = false;
      this.showResult = false;
      this.http.get('https://twg-api.herokuapp.com/api/genre?username='+this.username)
        .map(response => response.json())
        .subscribe(res => {
          this.gData = res['categories'];
          if(this.gData.length > 0) {
            for (var i in this.gData) {
              this.pie_ChartData.push([this.gData[i].topic, this.gData[i].value]);
            }
            this.gauge_ChartData.push([_.maxBy(this.gData, 'value').topic, _.maxBy(this.gData, 'value').value])
            this.gauge_ChartData.push([_.minBy(this.gData, 'value').topic, _.minBy(this.gData, 'value').value])

            this.showResult = true;
            this.showId = false;
          } else {
            this.toggleError("User not found or account is Private");
            this.showId = false;
          }
        });
    }
  }
}
