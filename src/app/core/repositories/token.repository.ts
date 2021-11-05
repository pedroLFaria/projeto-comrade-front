import { Observable } from 'rxjs';
import { AuthenticationModel } from '../domain/authentication.model';
import { TokenModel } from '../domain/token.model';
import { SingleResultModel } from '../response-results/single-result.model';

export abstract class TokenRepository {
  abstract postGenerateToken(param: AuthenticationModel): Observable<SingleResultModel<TokenModel>>;
}
