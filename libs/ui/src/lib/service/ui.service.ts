import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UiService {

    private title = new BehaviorSubject<String>('');

    setLog(item: string) {
        this.title.next(item);
    }

    getLog(): Observable<String> {
        return this.title.asObservable();
    }
}
