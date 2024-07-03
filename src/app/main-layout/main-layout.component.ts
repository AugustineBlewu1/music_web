import {
  Component,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { Page } from '../../types';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  @Input() pages: Page[] = [];
 
}
