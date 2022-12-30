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
    this._bottomSheet.open(BottomSheetArtist);
  }
}

@Component({
  selector: 'bottom-sheet-artist',
  templateUrl: './bottom-sheet-artist.html',
})
export class BottomSheetArtist {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetArtist>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}