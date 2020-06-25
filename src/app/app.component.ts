import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'frontEndDevelopmentTaskTemp';
  constructor(){}
  credentials:any;
  ngOnInit():void{
    this.credentials =[{"userId":'1',"name":'Yuvanesh'}];
    localStorage.setItem('userCredentials',JSON.stringify(this.credentials));
  }
}
