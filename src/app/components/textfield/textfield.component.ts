import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule ],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.css'
})
export class TextfieldComponent {
  hide = true;

  @Input({ required: true })
  inputForm!: FormGroup;

  @Input({ required: true })
  inputId!: string | number | null;

  @Input()
  title: string | undefined = '';

  @Input()
  type: 'text' | 'password' = 'text';

  @Input()
  prefixIcon: string | undefined;

  @Input()
  suffixIcon: string | undefined;

  @Input()
  placeholder: string | undefined;

  @Input()
  inputBorder: 'outlined' | 'underlined' = 'outlined';

  ngOnInit(): void {
    if (this.inputId === '' || this.inputId === null || this.inputId === undefined) {
      throw new TypeError('`id` is required');
    }
  }
}
