import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';

@NgModule({
  declarations: [TableLightComponent, BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, IconsModule, TableLightComponent, BtnComponent],
})
export class SharedModule {}
