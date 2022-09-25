import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  exports: [
    MatTableModule,
    MatSortModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
