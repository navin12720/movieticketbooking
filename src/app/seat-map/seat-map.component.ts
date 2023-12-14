import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css'],
})
export class SeatMapComponent {
  @Input() selectedSeats: string[] = [];
  @Output() seatSelected = new EventEmitter<string>();
  @Output() seatsCleared = new EventEmitter<void>();

  seatMap: string[][] = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['C1', 'C2', 'C3', 'C4', 'C5'],
    ['D1', 'D2', 'D3', 'D4', 'D5'],
    ['E1', 'E2', 'E3', 'E4', 'E5'],
  ];

  toggleSeatSelection(seat: string) {
    this.seatSelected.emit(seat);
  }

  isSeatSelected(seat: string) {
    return this.selectedSeats.includes(seat);
  }

  bookTickets() {
    this.seatsCleared.emit();
  }

  clearSeats() {
    this.seatsCleared.emit();
  }

  // selectedSeat: string[] = [];

  // constructor() {
  //   this.sortSeatNames();
  // }

  // sortSeatNames() {
  //   this.seatMap.sort();
  // }

  // selectSeat(seat: string) {
  //   this.selectedSeat = seat;
  //   this.moveSelectedSeatToTop();
  // }

  // moveSelectedSeatToTop() {
  //   if (this.selectedSeat) {
  //     const index = this.seatMap.indexOf(this.selectedSeat);
  //     if (index !== -1) {
  //       this.seatMap.splice(index, 1);
  //       this.seatMap.unshift(this.selectedSeat);
  //     }
  //   }
  // }
}
