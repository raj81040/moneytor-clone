import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-features',
  standalone: true,   // 🔥 MUST BE TRUE
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.scss']
})

export class Features {

  activeTab = 'erp';
  activeImage = 'assets/erp.png';

  @ViewChild('bigPanel') bigPanel!: ElementRef;

  setActive(tab: string) {
    this.activeTab = tab;

    // Change Image
    this.activeImage = `assets/${tab}.png`;

    // Auto Scroll
    setTimeout(() => {
      this.bigPanel.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 200);
  }
}