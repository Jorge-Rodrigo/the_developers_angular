import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DevelopercardComponent } from './developercard/developercard.component';

@Component({
  selector: 'app-developerssection',
  standalone: true,
  imports: [CommonModule, DevelopercardComponent],
  templateUrl: './developerssection.component.html',
  styleUrl: './developerssection.component.css'
})
export class DeveloperssectionComponent {
  developerList = [
    {
      name:"Josefine" ,
      photo: "assets/developer1.jpg", 
      description: "Lorem ipsum dolor sit amet"
    },
    {
      name:"Rudolf" ,
      photo: "assets/developer2.jpg", 
      description: "Lorem ipsum dolor sit amet"
    },
    {
      name:"Lucy" ,
      photo: "assets/developer3.jpg", 
      description: "Lorem ipsum dolor sit amet"
    },
    {
      name:"Robert" ,
      photo: "assets/developer4.jpg", 
      description: "Lorem ipsum dolor sit amet"
    }
  ]
}
