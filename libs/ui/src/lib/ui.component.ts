import { Component, OnInit } from '@angular/core';
import { UiService } from './service/ui.service';

@Component({
  selector: 'employees-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  title:String;

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.getLog().subscribe(arg => this.title = arg);
  }

}
