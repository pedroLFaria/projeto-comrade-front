import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { CurtidaRepository } from '../../repositories/curtida.repository';
import { CurtidaModel } from '../../models/curtida.model';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class PostCurtidaUsecase implements UseCase<CurtidaModel, SingleResultModel<CurtidaModel>> {
  constructor(private curtidaRepository: CurtidaRepository) {}

  execute(params: CurtidaModel): Observable<SingleResultModel<CurtidaModel>> {
    return this.curtidaRepository.post(params);
  }
}
