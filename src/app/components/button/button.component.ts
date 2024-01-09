import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import classNames from 'classnames';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input()
  title: string | undefined;

  @Input()
  goTo: string | undefined;

  @Input()
  icon: string | undefined;

  @Input()
  classes: string | undefined = '';

  @Input()
  color: string | undefined = 'primary';

  @Input()
  textColor: string | undefined = 'primary-contrast';

  ngOnInit(): void {
  }
}
