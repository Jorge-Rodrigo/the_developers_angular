import { Component } from '@angular/core';
import { HerosectionComponent } from '../../components/sections/herosection/herosection.component';
import { CtasectionComponent } from '../../components/sections/ctasection/ctasection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HerosectionComponent,CtasectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
