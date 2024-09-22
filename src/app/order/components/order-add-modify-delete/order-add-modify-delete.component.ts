import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Order} from "../../model/order.entity";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatColumnDef, MatHeaderRow, MatTable} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-order-add-modify-delete',
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
  templateUrl: './order-add-modify-delete.component.html',
  styleUrl: './order-add-modify-delete.component.css'
})
export class OrderAddModifyDeleteComponent {
  //#region Attributes
  @Input() order!: Order;
  @Input() editMode: boolean = false;
  @Output() protected orderAddRequested = new EventEmitter<Order>();
  @Output() protected orderUpdateRequested = new EventEmitter<Order>();
  @Output() protected cancelRequested = new EventEmitter<void>();
  @ViewChild('orderForm', { static: false}) protected orderForm!: NgForm;

  //#endregion Attributes

  //#region Methods

  constructor() {
    this.order = new Order({});

  }

  private resetEditState() {
    this.order = new Order({});
    this.editMode = false;
    this.orderForm.reset();
  }

  private isValid = () => this.orderForm.valid;

  protected isEditMode = (): boolean => this.editMode;

  // Event Handlers

  protected onSubmit() {
    if (this.isValid()) {
      let emitter = this.isEditMode() ? this.orderUpdateRequested : this.orderAddRequested;
      emitter.emit(this.order);
      this.resetEditState();
    }
  }

  protected onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }

  //#endregion Methods


}
