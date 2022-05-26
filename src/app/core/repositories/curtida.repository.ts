import { Observable } from 'rxjs';
import { CurtidaModel } from '../models/curtida.model';
import { UsuarioModel } from '../models/usuario.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class CurtidaRepository {
  abstract post(curtida: CurtidaModel): Observable<SingleResultModel<CurtidaModel>>;
  abstract getMatches(userId: number): Observable<PageResultModel<UsuarioModel>>;
}
