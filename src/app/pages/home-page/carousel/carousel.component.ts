import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngb-carousel',
  templateUrl: './carousel.component.html',
  standalone: true,
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit {

  constructor() { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit(): void {
  }

}
