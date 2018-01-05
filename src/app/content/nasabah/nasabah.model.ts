export class Nasabah {
    constructor(
        public noCif: number,
        public cabang: string,
        public accOfficer: string,
        public namaLengkap: string,
        public namaSingkat: string,
        public namaAlias: string,
        public namaIbu: string,
        public jenisKelamin: string,
        public tempatLahir: string,
        public tglLahir: Date,
        public tglBukaRek: Date,
        public jenisId: string,
        public noId: string,
        public alamat: string,
        public rt: number,
        public rw: number,
        public kel: string,
        public kec: string,
        public kab: string,
        public prov: string,
        public negara: string,
        public masaBerlaku: Date,
        public kodePos: string,
        public npwp: string,
        public noHp: string,
        public ket: string) {

        }
}