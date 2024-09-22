import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Order } from '../../model/order.entity';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  @Input() order!: Order;
  @Input() editMode: boolean = false;
  @Output() protected orderAddRequested = new EventEmitter<Order>();
  @Output() protected orderUpdateRequested = new EventEmitter<Order>();
  @Output() protected cancelRequested = new EventEmitter<void>();
  @ViewChild('orderForm', { static: false }) protected orderForm!: NgForm;

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

  protected onSubmit() {
    if (this.isValid()) {
      let emitter = this.isEditMode() ? this.orderUpdateRequested : this.orderAddRequested;
      emitter.emit(this.order);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  protected onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }
}
