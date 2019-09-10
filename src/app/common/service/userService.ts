import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {

    }
    fetchUserList(numberOfUser: number): Promise<any> {
        return this.httpClient.get('https://randomuser.me/api/?results=' + numberOfUser).toPromise();
    }
}
