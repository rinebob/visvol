import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vz-ticker-list',
  templateUrl: './ticker-list.component.html',
  styleUrls: ['./ticker-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
