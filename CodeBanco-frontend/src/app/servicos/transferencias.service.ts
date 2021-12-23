import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  url = '/transferencias'

  constructor(private http:HttpClient) { }

  getTransferencias(){
    return this.http.get(this.url)
  }

  getUmaTransferencia(id:any){
    return this.http.get(this.url + '/' + id)
  }

  addTransferencia(Transferencia:Transferencia){
    return this.http.post(this.url,Transferencia)
  }

  deleteTransferencia(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  editTransferencia(id:any, Transferencia:Transferencia){
    return this.http.put(this.url + '/' + id, Transferencia)
  }
}

export interface Transferencia{
  id_transferencia?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
}