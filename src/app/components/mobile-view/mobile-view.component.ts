import { Component, OnInit } from '@angular/core';
import { DESCRIPTION } from 'src/app/const';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss'],
})
export class MobileViewComponent implements OnInit {
  description = DESCRIPTION;

  constructor() {}

  ngOnInit() {}
}
