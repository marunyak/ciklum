import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService, loaderState } from '../service/loader.service';

@Component({
  selector: 'employees-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show = false;

  private subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState.subscribe((state: loaderState) => {
      this.show = state.show;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
