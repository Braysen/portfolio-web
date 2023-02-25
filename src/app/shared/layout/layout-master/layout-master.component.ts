import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-layout-master',
  standalone: true,
  imports: [CommonModule, MenuLateralComponent],
  templateUrl: './layout-master.component.html',
  styleUrls: ['./layout-master.component.css']
})
export class LayoutMasterComponent {

}
