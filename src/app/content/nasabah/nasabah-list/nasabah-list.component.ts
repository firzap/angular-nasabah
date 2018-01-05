import {Component, OnInit, OnDestroy} from '@angular/core';
import {Nasabah} from '../nasabah.model';
import {NasabahService} from '../nasabah.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nasabah-list',
  templateUrl: './nasabah-list.component.html',
  styleUrls: ['./nasabah-list.component.css']
})
export class NasabahListComponent implements OnInit, OnDestroy {

  constructor(private _nasabahService: NasabahService){

  }

  data: Nasabah[] = [];

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(){

  }

  loadData(){
    this._nasabahService.getData().subscribe((bantu:Nasabah[])=>{
      this.data=bantu;
    })
  }

}
