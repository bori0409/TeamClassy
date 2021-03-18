import { Component } from '@angular/core';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;

  constructor(private qrScanner: QRScanner) {}

  scan(){
    // start scanning
    const scanSub = this.qrScanner.scan().subscribe((text: string) => {
      console.log('Scanned something', text);

      this.qrScanner.hide(); // hide camera preview
      scanSub.unsubscribe(); // stop scanning
    });

  }

}
