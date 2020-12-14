import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    
    public logueado:boolean=false;

    login(){
        if(this.logueado){
            return true;
        }else{
            return false;
        }
    }
}
