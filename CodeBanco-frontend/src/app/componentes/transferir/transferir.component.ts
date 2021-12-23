// *******************Importação**********************
import { Component, OnInit } from '@angular/core';
import { Transferencia, TransferenciasService } from 'src/app/servicos/transferencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {

  transferencia:Transferencia = {
    id_transferencia:'',
    nomeCliente:'',
    valor:'',
    contaCliente:''
  }

  constructor(private TransferenciasService:TransferenciasService, private router:Router) { }

  ngOnInit(): void {
  }

  adicionar(){
    delete this.transferencia.id_transferencia
    this.TransferenciasService.addTransferencia(this.transferencia).subscribe({
      next: (resultado) => console.log("transferencia realizada com sucesso"),
      error: (erro) => console.error(erro),
      complete: ()=> console.info("transferencia completa")
    })

    this.router.navigate(['/inicio'])
  }
}
