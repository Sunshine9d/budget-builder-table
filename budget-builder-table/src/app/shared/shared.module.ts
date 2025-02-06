import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { SelectionComponent } from './components/select/select.component';

@NgModule({
    declarations: [HeaderComponent, InputComponent, SelectionComponent],
    imports: [CommonModule, MaterialModule],
    exports: [MaterialModule, HeaderComponent, InputComponent, SelectionComponent],
})
export class SharedModule {}
