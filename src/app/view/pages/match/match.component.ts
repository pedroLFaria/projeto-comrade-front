import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { GetMatchesByUsuarioUsecase } from 'src/app/core/usecases/curtida/get-matchs-usuario.usecase';
import { GetAllFotoUsecase } from 'src/app/core/usecases/foto/get-all-foto-by-usuario.usecase';

@Component({
  templateUrl: 'match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  matches?: UsuarioModel[] = [];

  constructor(
    private getMatchesByUsuarioUsecase: GetMatchesByUsuarioUsecase,
    private getAllFotoUsecase: GetAllFotoUsecase
  ) {}

  ngOnInit(): void {
    this.getMatchesByUsuarioUsecase.execute(1).subscribe((usuario) => {
      this.matches = usuario.data;
      this.matches?.forEach((e) => this.getFotos(e));
    });
  }

  getFotos(user: UsuarioModel) {
    user.fotos = [];
    this.getAllFotoUsecase.execute(user?.id!).subscribe((e) => {
      e.data?.forEach((e) => user?.fotos?.push(e.url));
    });
  }
}
