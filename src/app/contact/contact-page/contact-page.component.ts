import {Component} from '@angular/core';
import {PageComponent} from "../../ui/layout/page/page.component";
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    PageComponent,
    ContactFormComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
