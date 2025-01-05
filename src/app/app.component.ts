import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
}
