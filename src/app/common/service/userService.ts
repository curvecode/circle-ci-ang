import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {

    }
    fetchUserList(): Promise<any> {
        return this.httpClient.get('https://randomuser.me/api/?results=500').toPromise();
    }
}
