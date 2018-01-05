import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Nasabah} from './nasabah.model';

@Injectable()
export class NasabahService {

  constructor(private _http: HttpClient){

  }

  private baseUrl: string ="http://localhost:8080/nasabah";

  //buat fetch data
  getData(){ 
    return this._http.get(this.baseUrl+"/list");
  }

  //hapus
  hapus(noCif: number){
        return this._http.post(this.baseUrl+"/"+noCif+"/dihapus", {});
    }

}
