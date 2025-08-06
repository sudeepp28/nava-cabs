import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-afirst',
  standalone:false,
  templateUrl: './afirst.component.html',
  styleUrl: './afirst.component.css'
})
export class AfirstComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/afirst.jpg',
    'assets/asecond.jpg',
    'assets/athird.jpg'
  ];
  currentIndex: number = 0;
  currentImage: string = this.images[0];
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 3000); // change image every 3 seconds
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
