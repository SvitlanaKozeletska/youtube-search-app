import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YoutubeSearchInjectables } from './youtube-search.injectables';
import { HttpClientModule } from '@angular/common/http';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchBoxComponent} from './search/search-box.component';
import {FormsModule} from '@angular/forms';
import {YouTubeSearchComponent} from './youtube-search.component';


@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [YoutubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
