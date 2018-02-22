import {Component, OnInit} from '@angular/core';
import {SearchResult} from './search-result.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit(): void { }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
}
