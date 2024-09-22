import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Stock} from "../../model/stock.entity";
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatColumnDef, MatHeaderRow, MatTable} from "@angular/material/table";
import {MatSort} from "@angular/material/sort"
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-stock-add-and-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatTable,
    MatSort,
    MatColumnDef,
    MatIcon,
    MatHeaderRow
  ],
  templateUrl: './stock-add-and-edit.component.html',
  styleUrl: './stock-add-and-edit.component.css'
})
export class StockAddAndEditComponent {
  //#region Attributes
@Input() stock!: Stock;
@Input() editMode: boolean = false;
@Output() protected stockAddRequested = new EventEmitter<Stock>();
@Output() protected stockUpdateRequested = new EventEmitter<Stock>();
@Output() protected cancelRequested = new EventEmitter<void>();
@ViewChild('stockForm', { static: false}) protected stockForm!: NgForm;

//#endregion Attributes

//#region Methods

constructor() {
this.stock = new Stock({});

}

 private resetEditState() {
this.stock = new Stock({});
this.editMode = false;
this.stockForm.reset();
 }

private isValid = () => this.stockForm.valid;

protected isEditMode = (): boolean => this.editMode;

// Event Handlers

protected onSubmit() {
if (this.isValid()) {
  let emitter = this.isEditMode() ? this.stockUpdateRequested : this.stockAddRequested;
  emitter.emit(this.stock);
  this.resetEditState();

} else {
  console.error('Invalid form data');
}
}

protected onCancel() {
this.cancelRequested.emit();
this.resetEditState();
}

//#endregion Methods
}
