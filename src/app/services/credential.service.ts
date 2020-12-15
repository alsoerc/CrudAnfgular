import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './globsl';
import {Credential} from '../models/Credential';
@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  url : string;

  constructor(private _credentialService : HttpClient) { 
    this.url = Global.url;
  }

  findOne(credential : Credential){
    return this._credentialService.get<Credential>(this.url + 'credentials/' + credential.username + '/' + credential.password);
  }

}
