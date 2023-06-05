import Code from '../../../../../components/modules/code';
import { PageTitle } from '../../../../../components/modules/page-title';

export const TutorialNetAngularLesson7 = () => {
  return (
    <>
      <PageTitle title="7. Making HTTP requests in Angular"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. app.module.ts</b>
          <div className="tab-2">
            <Code
              code={`import { NgModule } from '@angular/core';
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
export class AppModule { }`}
              language="javascript"
            />
          </div>
          <b>2. Adding a DBContext class</b>
          <div className="tab-1">
            <p>- Add folder: API\Data</p>
            <p>- Add class: DataContext</p>
          </div>
          <div className="tab-2">
            <Code
              code={`import { HttpClient } from '@angular/common/http';
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
}`}
              language="javascript"
            />
          </div>
        </div>
      </div>
    </>
  );
};
