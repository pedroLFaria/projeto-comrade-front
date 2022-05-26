import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { CurtidaModel } from 'src/app/core/models/curtida.model';
import { CurtidaWebEntity } from './curtida-web-entity';
import { SingleResultModel } from 'src/app/core/utils/responses/single-result.model';
import { CurtidaRepository } from 'src/app/core/repositories/curtida.repository';
import { CurtidaWebRepositoryMapper } from './curtida-web-repository-mapper';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { UsuarioWebEntity } from '../usuario-web-repository/usuario-web-entity';

@Injectable({
  providedIn: 'root',
})
export class CurtidaWebRepository extends CurtidaRepository {
  mapper = new CurtidaWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  post(curtida: CurtidaModel): Observable<SingleResultModel<CurtidaModel>> {
    return this.http
      .post<SingleResultModel<CurtidaWebEntity>>(
        `${environment.SYSTEMUSER}curtida/`,
        this.mapper.mapTo(curtida)
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getMatches(userId: number): Observable<PageResultModel<UsuarioModel>> {
    const usuarios: UsuarioModel[] = [];
    var request = this.http
      .getAll<PageResultModel<UsuarioWebEntity>>(
        `${environment.SYSTEMUSER}curtida/matches/${userId}`
      )
      .pipe(
        map((x) => {
          x.data.data?.forEach((e) => {
            usuarios.push({
              nome: e.usuarioNome ?? '',
              id: e.usuarioId,
            });
          });
          return { data: usuarios } as PageResultModel<UsuarioModel>;
        })
      );
    return request;
  }
}
