import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Dupe} from "../../model/dupe.entity";
import {DupeService} from "../../services/dupe.service";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-card-dupe',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage
  ],
  templateUrl: './card-dupe.component.html',
  styleUrl: './card-dupe.component.css'
})
export class DupeCardComponent {
  @Input() dupe!: Dupe;
  @Output() deleteDupe = new EventEmitter<void>();
  @Output() editDupe = new EventEmitter<void>();
  isModalOpen: boolean = false;

  dupeService: DupeService = inject(DupeService);

  onDupeDeleted(dupeId: number): void {
    this.dupeService.delete(dupeId).subscribe((response: any) => {
      console.log(`Dupe with ID ${dupeId} deleted successfully.`);
      this.deleteDupe.emit();
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onEditSuccess() {
    this.editDupe.emit();
    this.closeModal();
  }
}
