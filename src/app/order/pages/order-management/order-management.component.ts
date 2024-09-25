import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {Order } from "../../model/order.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {OrderService } from "../../services/order.service";
import {OrderAddModifyDeleteComponent} from "../../components/order-add-modify-delete/order-add-modify-delete.component";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {StockAddAndEditComponent} from "../../../inventory/components/stock-add-and-edit/stock-add-and-edit.component";


@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [
    OrderAddModifyDeleteComponent,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatSortHeader,
    MatCell,
    MatCellDef,
    MatIcon,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    NgClass,
    MatRow,
    MatPaginator,
    MatIconButton,
    StockAddAndEditComponent,
    MatButton,
    OrderAddModifyDeleteComponent
  ],
  templateUrl: './order-management.component.html',
  styleUrl: './order-management.component.css'
})
export class OrderManagementComponent implements OnInit, AfterViewInit {
  //#region Attributes

  protected orderData!: Order;
  protected columnsToDisplay: string[] = ['id', 'table', 'client', 'time' , 'status', 'actions'] ;
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false})
  protected sort!: MatSort;
  protected editMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;
  private orderService: OrderService = inject(OrderService);

  //#endregion

  //#region Methods

  constructor() {
    this.editMode = false;
    this.orderData = new Order({});
    this.dataSource = new MatTableDataSource();
    console.log(this.orderData);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ngOnInit(): void {
    this.getAllOrders();
  }

  protected onEditItem(item: Order){
    this.editMode = true;
    this.orderData = item;
  }
  protected onDeleteItem(item: Order){
    this.deleteOrder(item.id);
  }

  protected onCancelRequested(){
    this.resetEditState();
    this.getAllOrders()
  }

  protected onOrderAddRequested(item: Order){
    this.orderData = item;
    this.createOrder();
    this.resetEditState();
  }
  protected onOrderUpdateRequested(item: Order){
    this.orderData = item;
    this.updateOrder();
    this.resetEditState();
  }
  private resetEditState(){
    this.orderData = new Order({});
    this.editMode = false;
  }

  private getAllOrders(){
    this.orderService.getAll().subscribe((response: Array<Order> ) => this.dataSource.data = response);
  }

  private createOrder(){
    this.orderService.create(this.orderData).subscribe((response: Order) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }

  private updateOrder() {
    let orderToUpdate = this.orderData;
    this.orderService.update(orderToUpdate.id, orderToUpdate).subscribe((response: Order) => {
      let index = this.dataSource.data.findIndex((order: Order ) => order.id === response.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = this.dataSource.data;
    });

  }

  private deleteOrder(id: number) {
    this.orderService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((order: Order) => order.id !== id);
    });

  }

  //#endregion

}
