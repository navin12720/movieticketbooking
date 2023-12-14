import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() movie: any;
  @Output() ticketBooked = new EventEmitter<void>();

  bookTickets() {
    this.ticketBooked.emit();
  }
}