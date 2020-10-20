import { NgModule } from '@angular/core';



import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatProgressBarModule} from '@angular/material/progress-bar';


const MaterialComponents = [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressBarModule
  
  ]

@NgModule({
    exports:[
   MaterialComponents
    ],
     imports: [
       MaterialComponents
     ]
   })
export class MaterialModule { }