export const naLesson7Data = {
    app_module: `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';    //

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`,

app_component:  `import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'The dating app';
  users: any;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get("https://localhost:5001/api/users").subscribe(response => {
      this.users = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}`
}