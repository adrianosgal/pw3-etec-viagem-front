import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../services/viagem.service';

@Component({
  selector: 'app-listagem-viagem',
  templateUrl: './listagem-viagem.component.html',
  styleUrls: ['./listagem-viagem.component.css']
})
export class ListagemViagemComponent implements OnInit {


  viagens: Array<any> = [];

  constructor(private viagemService: ViagemService) { }

  // Chama o serviço para obter todas as viagens
  listarViagens() {
    this.viagemService.listarTodas().subscribe(e => this.viagens = e);
  }

  ngOnInit() {
   this.listarViagens();
	}


}
