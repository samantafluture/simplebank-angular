import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    transferencias: any[] = [];

    transferir($event: any): void {
        const transferencia = { ...$event, data: new Date() };
        this.transferencias.push(transferencia);
    }
}
