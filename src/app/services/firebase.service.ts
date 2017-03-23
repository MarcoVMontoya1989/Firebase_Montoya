import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Business } from '../business';
import { Category } from '../category';

@Injectable()
export class FirebaseService {
    business: FirebaseListObservable<Business[]>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private _af: AngularFire) {
    }

    // sirve para obtener todos los contactos del business solo tipo consulta
    // getBusiness(){
    //     this.business = this._af.database.list('/business') as FirebaseListObservable<Business[]>
    //     return this.business;
    // }

    //sirve para poder definir la categoria del contacto
    getBusiness(categories: string = null){
        if(categories != null && categories != '0'){
            this.business = this._af.database.list('/business', {
                query: {
                    orderByChild: 'category', 
                    equalTo: categories
                }
            }) as FirebaseListObservable<Business[]>
        }else{
            this.business = this._af.database.list('/business') as FirebaseListObservable<Business[]>
        }
        // this.business = this._af.database.list('/business') as FirebaseListObservable<Business[]>
        return this.business;
    }

    getCategory(){
        this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>
        return this.categories;
    }

    addBusinessContact(newbusiness){
        return this.business.push(newbusiness);
    }

    updateBusiness(key,updBusiness){
        return this.business.update(key,updBusiness);
    }
    deleteBusiness(key){
        return this.business.remove(key);
    }

}


