import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  showLogin = false;
  @Input() movies: any[]=[];
  @Output() movieSelected = new EventEmitter<any>();
  showLoginComponent() {
    this.showLogin = true;
  }

  selectMovie(movie: any) {
    this.movieSelected.emit(movie);
  }
  searchTrem:string='';
  filtermovie:any[];
  constructor(){
    this.filtermovie=this.movies;
  }
  searchmovie(){
    this.filtermovie=this.movies.filter(movie=>movie.name.toLowerCase().includes(this.searchTrem.toLocaleLowerCase()));
  }
}