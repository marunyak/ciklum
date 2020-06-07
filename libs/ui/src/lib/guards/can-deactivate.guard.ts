import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  hasChanges: () => Promise<boolean> | boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(private modalService: ModalService) {}

  canDeactivate(component: CanComponentDeactivate) {

      if (!component.hasChanges()) {
        return true;
      }

      this.modalService.openErrorModal();
      return this.modalService.navigateAwaySelection$;
  }

}
