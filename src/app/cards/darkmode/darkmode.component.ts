import { DarkModeService } from '../../services/dark-mode.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [],
  templateUrl: './darkmode.component.html',
  styleUrl: './darkmode.component.css',
})
export class DarkmodeComponent implements OnInit {
  darkModeService: DarkModeService = inject(DarkModeService);

  ngOnInit(): void {
    console.log('darkModeService :>>', this.darkModeService);
  }

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }
}
