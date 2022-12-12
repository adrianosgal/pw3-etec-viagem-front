import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cadastro', component: CadastroViagemComponent},
  { path: 'listagem', component: ListagemViagemComponent},
  { path: 'detalhes/:id', component: DetalhesViagemComponent},
  { path: 'exclusao/:id', component: ExclusaoViagemComponent},
  { path: '', component: ListagemViagemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
