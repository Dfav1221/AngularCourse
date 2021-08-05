import {EventEmitter, Output} from '@angular/core';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter<string>();
  selectedTab: string = 'recipe';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.selectedFeature.emit(feature);
  }
}
