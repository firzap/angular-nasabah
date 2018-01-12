import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NasabahService} from './nasabah.service';
import {Nasabah} from './nasabah.model';

@Component({
    selector: '.app-nasabah-item',
    template: `
            <td>{{nomor+1}}</td>
            <td>{{nasabahs?.namaLengkap}}</td>   
            <td>{{nasabahs?.noCif}}</td>
            <td>{{nasabahs?.accOfficer}}</td>
            <td>{{nasabahs?.tglBukaRek}}</td>
            <td>{{nasabahs?.jenisKelamin}}</td>
            <td>
                <button class="glyphicon glyphicon-trash btn btn-primary btn-sm" (click)="delete(nasabahs?.noCif)"></button>
                <button class="glyphicon glyphicon-edit btn btn-primary btn-sm" [routerLink]="['edit', nasabahs.noCif]"></button>
            </td>
    `
})
export class NasabahItemComponent {

    constructor(private serpisNasabah: NasabahService){

    }

    @Output() onRemove = new EventEmitter<number>();

    @Input() nomor: number;

    @Input() nasabahs: Nasabah;

    delete(value: number) {
        this.serpisNasabah.hapus(value).subscribe(data => {
            console.log(data);            
        });
    }
}