import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { DESCRIPTION } from '../const';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  description = DESCRIPTION;

  constructor() {}
  qrCodeData: string =
    'https://drive.google.com/file/d/1NrP0XpGwQoGn5Hp6IWMiFhOS568GFD7U/view?usp=drive_link';
  qrCodeImage: string | undefined;

  ngOnInit() {
    QRCode.toDataURL(this.qrCodeData)
      .then((url) => {
        this.qrCodeImage = url;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
