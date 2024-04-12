import { Component } from '@angular/core';
import { HerosectionComponent } from '../../components/sections/herosection/herosection.component';
import { CtasectionComponent } from '../../components/sections/ctasection/ctasection.component';
import { DeveloperssectionComponent } from '../../components/sections/developerssection/developerssection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HerosectionComponent,CtasectionComponent, DeveloperssectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
