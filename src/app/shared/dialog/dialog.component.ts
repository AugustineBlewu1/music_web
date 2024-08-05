import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, signal } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent  {
  // @Input() isOpen = false;
  @Input() title = '';
  @Input() message = '';
  @ViewChild('dialogDiv') dialog!: ElementRef<HTMLDialogElement>
  isOpen = signal(false);

  // ngAfterViewInit() {
  //   this.dialog.nativeElement.close();
  // }

  confirm() {
    this.isOpen.update((va) => !va)

  }

  close() {
    
    this.isOpen.update((va) => !va)

    // this.isOpen = false;
  }

  open() {
    this.isOpen.update((va) => !va)
  }
}
