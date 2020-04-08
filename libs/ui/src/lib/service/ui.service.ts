import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UiService {

    private title = new BehaviorSubject<String>('');
    private title$ = this.title.asObservable();

    setLog(item: string) {
        this.title.next(item);
    }

    getLog(): Observable<String> {
        return this.title$;
    }
}
