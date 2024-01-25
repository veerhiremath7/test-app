import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  check: string;
  documentType: string;
  language: string;
  domain: string;
  intents: number;
  entries: number;
  document: number;
  assigned: number;
  tagged: number;
  trained: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    check: '', documentType: 'Hydrogen', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active'
  },
  {
    check: '', documentType: 'Helium', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active'
  },
  { check: '', documentType: 'Lithium', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active' },
  { check: '', documentType: 'Beryllium', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active' },
  { check: '', documentType: 'Boron', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active' },
  { check: '', documentType: 'Carbon', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active' },
  { check: '', documentType: 'Nitrogen', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active' },
  { check: '', documentType: 'Oxygen', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active' },
  { check: '', documentType: 'Fluorine', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active' },
  { check: '', documentType: 'Neon', language: 'English', domain: 'Supplier Contracts', intents: 12, entries: 96, document: 12, assigned: 7, tagged: 6, trained: 4, status: 'active' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['select', 'documentType', 'language', 'domain', 'intents', 'entries', 'document', 'assigned', 'tagged', 'trained', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  clickedRows = new Set<PeriodicElement>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: PeriodicElement) {
    //   if (!row) {
    //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    //   }
    //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
