import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {ApiService} from './api.service';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    constructor(private api: ApiService) {

    }


    getUsers(filter?: string): Observable<User[]> {

        let endPoint = '/users';

        return this.api.get(endPoint).pipe(map(res => res.json() as User[]));
        // ,catchError(err => Observable.throw(err))
    }

    search(q: string): Observable<any> {
        let endPoint = '/search/users?q=' + q;
        return this.api.get(endPoint).pipe(map(res => res.json())); // .catch(err => Observable.throw(err));

    }

    getUserFollowers(user: string): Observable<any> {

        let endPoint = '/users/' + user + '/followers';
        return this.api.get(endPoint).pipe(map(res => res.json())) ; // .catch(err => Observable.throw(err));
    }

}
