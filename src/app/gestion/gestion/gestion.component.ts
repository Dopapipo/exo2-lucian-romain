import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-gestion',
  standalone: true,
  templateUrl: './gestion.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnChanges {
  @Input() formData: any | null = null;
  lastFormData: any | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData']) {
      this.lastFormData = this.formData;
    }
  }

  clearData(): void {
    this.lastFormData = null;
    sessionStorage.removeItem('lastFormData');
  }

  fillFormWithData(): void {
    const prefilledData = {
      firstName: 'Jean-Philippe',
      lastName: 'Nondedeo',
      age: 28,
      email: 'jpnondedeo@p1.fr',
      comment: 'Futur utilisateur de Dofus Helper'
    };
    sessionStorage.setItem('lastFormData', JSON.stringify(prefilledData));
    window.location.reload();
  }
}
