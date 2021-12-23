// *******************Importação**********************
import { Component, OnInit } from '@angular/core';
import { Transferencia, TransferenciasService } from 'src/app/servicos/transferencias.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transferencia: Transferencia={
    id_transferencia:'',
    nomeCliente:'',
    valor:'',
    contaCliente:''
  }

  constructor(private TransferenciasService:TransferenciasService,
              private router:Router,
              private rotaAtiva:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.rotaAtiva.snapshot.params['id']

    console.log('id de entrada:' + id_entrada)
    this.TransferenciasService.getUmaTransferencia(id_entrada).subscribe({
      next: (resultado) => {console.log(resultado)
                            this.transferencia = resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info("Transferencia realizada")
    })
  }

  modificar(){
    this.TransferenciasService.editTransferencia(this.transferencia.id_transferencia, this.transferencia).subscribe({
      next: (resultado) => console.log("Transferencia editada com sucesso"),
      error: (erro) => console.error(erro),
      complete: ()=> console.info("Edição completada com sucesso")
    })
    this.router.navigate(['/inicio'])
  }

}
