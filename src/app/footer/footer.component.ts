import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetFooter);
  }
}

@Component({
  selector: 'bottom-sheet-footer',
  templateUrl: './bottom-sheet-footer.html',
})
export class BottomSheetFooter {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetFooter>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}