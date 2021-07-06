import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { SinglecomradeResponseModel } from '../../utils/single-comrade-response-model';
import { TokenModel } from '../../domain/token.model';
import { TokenRepository } from '../../repositories/token.repository';
import { AutenticacaoModel } from 'src/app/core/domain/autenticacao.model';

@Injectable({
  providedIn: 'root',
})
export class PostLoginUsecase
  implements UseCase<AutenticacaoModel, SinglecomradeResponseModel<TokenModel>>
{
  constructor(private processoRepository: TokenRepository) {}

  execute(params: AutenticacaoModel): Observable<SinglecomradeResponseModel<TokenModel>> {
    return this.processoRepository.postLogin(params);
  }
}
