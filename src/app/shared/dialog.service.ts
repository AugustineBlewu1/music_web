import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialogState = new Subject<{  title: string, message: string }>();

  dialogState$ = this.dialogState.asObservable();

  openDialog(title: string, message: string) {
    this.dialogState.next({ title, message });
  }

  
}
