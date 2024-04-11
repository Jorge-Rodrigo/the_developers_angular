import { Component } from '@angular/core';
import { TitlesectionComponent } from '../../components/sections/titlesection/titlesection.component';
import { ContactsectionComponent } from '../../components/sections/contactsection/contactsection.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitlesectionComponent,ContactsectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    title = "Contact Us"
}
