import { Component, OnInit, OnDestroy } from '@angular/core';
import {Nasabah} from '../nasabah.model';
import {Subscription} from 'rxjs/Subscription';
import {NasabahService} from '../nasabah.service';
import {ActivatedRoute, Params, Route} from '@angular/router';

@Component({
  selector: 'app-nasabah-edit',
  templateUrl: './nasabah-edit.component.html',
  styleUrls: ['./nasabah-edit.component.css']
})
export class NasabahEditComponent implements OnInit {

  constructor(private router: ActivatedRoute, private serpisNasabah: NasabahService) {

  }

  private paramsSubscribe: Subscription;
  nasabah: Nasabah = new Nasabah(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  ngOnInit() {
    this.paramsSubscribe = this.router.params.subscribe((data: Params)=>{
            this.serpisNasabah.ambil(data['id']).subscribe(data => {
                this.nasabah = data;
            });
        });
  }

  ngOnDestroy() {
    this.paramsSubscribe.unsubscribe();
  }

  submitData(event: any) {
    this.serpisNasabah.nasabah(this.nasabah).subscribe(data => {
    });
  }

}
