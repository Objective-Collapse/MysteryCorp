import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IEmployee } from './employee';

@Injectable()
export class EmployeeService{
    private _empUrl:string ="http://localhost:4000/employee/";

    constructor(private _http:HttpClient){}

    getEmployeeByLastName(lastName:string):Observable<IEmployee[]>{
        let lastNameUrl = this._empUrl +"lastName/"+lastName;
        console.log(`Request url = ${lastNameUrl}`);
        return this._http.get<IEmployee[]>(lastNameUrl)
                .do(emps => {console.log("Count" + emps.length); JSON.stringify(emps);})
                .catch(this.processError);
    }

    private processError(err:HttpErrorResponse){
        let errorMessage:string='';
        if( err.error instanceof Error){
            errorMessage =`Error while getting data: ${err.error.message}`;
        }
        else{
            errorMessage=`Error returned from server, status:${err.status} message:${err.message}`
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }

}