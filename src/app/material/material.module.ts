import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Material from '@angular/material/';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatToolbarModule,
    Material.MatCardModule

  ],
  exports: [
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatToolbarModule,
    Material.MatCardModule
  ]
})
export class MaterialModule { }
