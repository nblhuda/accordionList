import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonItemSwipePageRoutingModule } from './ion-item-swipe-routing.module';

import { IonItemSwipePage } from './ion-item-swipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonItemSwipePageRoutingModule
  ],
  declarations: [IonItemSwipePage]
})
export class IonItemSwipePageModule {}
