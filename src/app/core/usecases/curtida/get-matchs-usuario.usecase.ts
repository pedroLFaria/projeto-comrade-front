import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { UsuarioModel } from '../../models/usuario.model';
import { CurtidaRepository } from '../../repositories/curtida.repository';

@Injectable({
  providedIn: 'root',
})
export class GetMatchesByUsuarioUsecase implements UseCase<number, PageResultModel<UsuarioModel>> {
  constructor(private curtidaRepository: CurtidaRepository) {}

  execute(id: number): Observable<PageResultModel<UsuarioModel>> {
    return this.curtidaRepository.getMatches(id);
  }
}
