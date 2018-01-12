import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NasabahService} from '../nasabah.service';
import {Nasabah} from '../nasabah.model';

@Component({
  selector: 'app-nasabah-tambah',
  templateUrl: './nasabah-tambah.component.html',
  styleUrls: ['./nasabah-tambah.component.css']
})
export class NasabahTambahComponent implements OnInit {

  constructor(private nasabahSerpis: NasabahService){

  }

  @Output() submitDataNasabah = new EventEmitter<Nasabah>();

  nasabah: Nasabah = new Nasabah(null, null,null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  
  ngOnInit() {
  
  }

  submitData(event: any){
    this.nasabahSerpis.tambahNasabah(this.nasabah).subscribe(data => {
            console.log(data);
    });
  }

}
