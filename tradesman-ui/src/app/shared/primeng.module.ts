import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, CardModule, InputTextModule],
  exports: [ButtonModule, CardModule, InputTextModule],
})
export class PrimengModule {}
