import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {Stock} from "../../model/stock.entity";
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
import {StockService} from "../../services/stock.service";
import {StockAddAndEditComponent} from "../../components/stock-add-and-edit/stock-add-and-edit.component";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-stock-management',
  standalone: true,
  imports: [
    StockAddAndEditComponent,
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
    MatIconButton
  ],
  templateUrl: './stock-management.component.html',
  styleUrl: './stock-management.component.css'
})
export class StockManagementComponent implements OnInit, AfterViewInit {

  //#region Attributes

  protected stockData!: Stock;
  protected columnsToDisplay: string[] = ['id', 'ingredient', 'quantity', 'actions'];
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false})
  protected sort!: MatSort;
  protected editMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;
  private stockService: StockService = inject(StockService);

  //#endregion

  //#region Methods

  constructor() {
   this.editMode = false;
    this.stockData = new Stock({});
    this.dataSource = new MatTableDataSource();
    console.log(this.stockData);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ngOnInit(): void {
   this.getAllStocks();
  }

  protected onEditItem(item: Stock){
    this.editMode = true;
    this.stockData = item;
  }
  protected onDeleteItem(item: Stock){
    this.deleteStock(item.id);
  }

  protected onCancelRequested(){
    this.resetEditState();
    this.getAllStocks()
  }

  protected onStockAddRequested(item: Stock){
    this.stockData = item;
    this.createStock();
    this.resetEditState();
  }
  protected onCourseUpdateRequested(item: Stock){
    this.stockData = item;
    this.updateStock();
    this.resetEditState();
  }
  private resetEditState(){
    this.stockData = new Stock({});
    this.editMode = false;
  }

  private getAllStocks(){
    this.stockService.getAll().subscribe((response: Array<Stock> ) => this.dataSource.data = response);
  }

private createStock(){
    this.stockService.create(this.stockData).subscribe((response: Stock) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }

  private updateStock() {
    let stockToUpdate = this.stockData;
    this.stockService.update(stockToUpdate.id, stockToUpdate).subscribe((response: Stock) => {
      let index = this.dataSource.data.findIndex((stock: Stock ) => stock.id === response.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = this.dataSource.data;
    });

  }

   deleteStock(id: number) {
    this.stockService.delete(id).subscribe((response: any  ) => {
      console.log(response);
      });

  }

  //#endregion

}
