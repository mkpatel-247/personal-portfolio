import { ConfettiService } from './../services/confetti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(public ConfettiService: ConfettiService) {}
}
