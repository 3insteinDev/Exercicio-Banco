// *******************Importação**********************
import { Component, OnInit } from '@angular/core';
import { TransferenciasService, Transferencia } from 'src/app/servicos/transferencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarTransferencias: Transferencia[]
  constructor(private transferenciasService:TransferenciasService, private router:Router) {
    this.ListarTransferencias = []
  }

  ngOnInit(): void {
    this.listarTransferencias()
  }

  listarTransferencias(){
    this.transferenciasService.getTransferencias().subscribe({
      next: (resultado) => {console.log(resultado)
                            this.ListarTransferencias=<any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info('Lista completa')
    })
  }
  excluir(id:any){
    this.transferenciasService.deleteTransferencia(id).subscribe({
      next: (resultado) => {console.log("transferencia excluída")
                            this.listarTransferencias()},
      error: (erro) => console.error(erro),
      complete: () => console.info("Processo de Exclusão completado")
    })
  }

  editar(id:any){
    this.router.navigate(['/edit/' + id])
  }

}
