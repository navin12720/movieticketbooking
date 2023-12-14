import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLogin = true;
  toggle() {
    this.showLogin = !this.showLogin;
  }
  // selectedMovie: any;
  // selectedSeats: string[] = [];
  // seatBooked: boolean = false;
  // bookingDate: string = '';
  // showLogin = false;
  // constructor(private router: Router) {}

  // movies: any[] = [
  //   {
  //     id: 1,
  //     name: 'Vaathi',
  //     duration: 120,
  //     director: ' Directed by Venky Atluri.',
  //     genre: 'The movies main theme is education.',
  //     language: 'Tamil,Telugu',imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeBUXCe-8VudORlzoMFOZNSwreoKA9mm9-w&usqp=CAU"
  //   },
  //   {
  //     id: 2,
  //     name: 'Leo',
  //     duration: 150,
  //     director: 'Directed by Lokesh Kanagaraj.',
  //     genre: 'Indian Tamil-language action thriller',
  //     language: 'Tamil,Telugu,Hindi',imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRnX8Z-tFxRqU7gkNuYppTWA-8Jh8az5qXoVHOMqCW&s'
  //   },
  //   {
  //     id: 3,
  //     name: 'Paiya',
  //     duration: 135,
  //     director: 'Directed by N. Linguswamy.',
  //     genre: 'Action-adventure film',
  //     language: 'Tamil',imageUrl:'https://i.pinimg.com/originals/af/4f/ae/af4fae162abeea8656708a5147c66dae.jpg'
  //   },
  //   {
  //     id: 4,
  //     name: '96',
  //     duration: 135,
  //     director: 'Directed by C. Premkumar.',
  //     genre: ' Romantic drama film',
  //     language: 'Tamil,Telugu',imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VLiiE5fn6P7VR4tNf1p8ZM1NB_bpPvbQ5w&usqp=CAU'
  //   },{
  //     id: 5,
  //     name: 'Ayan',
  //     duration: 135,
  //     director: 'Directed by K. V. Anand.',
  //     genre: ' Action thriller film ',
  //     language: 'Tamil',
  //     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwmQYU5pIH4AKAhQoD4gazxZYzvzM6QmgCg&usqp=CAU'
  //   },{

  //     id: 6,
  //     name: 'Sitaram',
  //     duration: 135,
  //     director: 'irected by Hanu Raghavapudi.',
  //     genre: 'Romantic drama film ',
  //     language: 'Tamil,Telugu',
  //     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetShQ-hhWC5o5ty0ndAfB5UJW-EgEYrmnkf69YyYyZj7QJojtZgqSVWQu6XNLk6yimeE&usqp=CAU'
  //   }
  // ];

  // selectMovie(movie: any) {
  //   this.selectedMovie = movie;
  //   this.selectedSeats = [];
  // }

  // selectSeat(seat: string) {
  //   if (this.selectedSeats.includes(seat)) {
  //     // Seat already selected, deselect it
  //     this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
  //   } else {
  //     // Seat not selected, add it to the selected seats
  //     this.selectedSeats.push(seat);
  //   }
  // }

  // clearSelectedSeats() {
  //   this.selectedSeats = [];
  // }

  // handleTicketBooked() {
  //   if (this.selectedMovie && this.selectedSeats.length > 0) {
  //     // Perform ticket booking logic here
  //     this.seatBooked = true;
  //     this.bookingDate = new Date().toISOString().substring(0, 10);
  //   }
  // }
}
