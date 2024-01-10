import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {
  @Input()
  label: string | undefined;

  @Input()
  selected: boolean | undefined = false;

  @Input()
  icon: string | undefined;

  @Input()
  bgColor: string | undefined = ' ';

  @Input()
  textColor: string | undefined = ' ';

  @Input()
  bgColorHover: string | undefined = this.bgColor;

  @Input()
  textColorHover: string | undefined = this.textColor;

  constructor() { }
}
