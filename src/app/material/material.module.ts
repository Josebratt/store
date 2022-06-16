import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


const Material = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  imports: [ Material ], 
  exports: [ Material ],
})
export class MaterialModule { }
