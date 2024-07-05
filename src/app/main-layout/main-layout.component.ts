import {
  Component,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChildren,
  AfterViewInit,
  signal,
} from '@angular/core';
import { Page } from '../../types';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  @Input() pages: Page[] = [];

   isActiveIndex = signal(0);

  setIsActiveRoute(index: number){
    this.isActiveIndex.set(index)
  }
 
}
