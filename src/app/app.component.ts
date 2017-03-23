import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { Business } from './business';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  // items: FirebaseListObservable<any[]>;
  // pokemon: FirebaseListObservable<any[]>;
  // constructor(af: AngularFire) {
  //   this.items = af.database.list('/items');
  //   this.pokemon = af.database.list('/pokemon');
  //}

  constructor(private _firebaseService: FirebaseService) {

  }
  busiRes: Business[];
  cateRes: Category[];
  FilterBusiness: Business[];

  appState: string;
  activeKey: string;


  //para editar contacto
  activeCompany: string;
  activeCategory: string;
  activeYearsinBusiness: string;
  activeDescription: string;
  activePhone: string;
  activeEmail: string;
  activeStreetAddress: string;
  activeCity: string;
  activeZipcode: string;
  activeState: string;

  ngOnInit() {
    this._firebaseService.getBusiness().subscribe(busi => {
      console.log(busi);
      this.busiRes = busi;

    });
    this._firebaseService.getCategory().subscribe(cate => {
      console.log(cate);
      this.cateRes = cate;
    });
  }

  changeState(state, key) {
    console.log("Changing state to: " + state);
    if (key) {
      console.log("Changing Key: " + key);
      this.activeKey = key;
    }
    this.appState = state;
  }

  //para el funcionamiento del filterCategory es necesario copiar al 100% igual del NGONINIT del getBusiness
  //para poder filtrar los resultados, y hacer efecto, aunque sirve de igual manera cuando cambias los variables
  //pero no funciona de igual manera.
  filterCategory(category) {
    this._firebaseService.getBusiness(category).subscribe(busi => {
      console.log(busi);
      this.busiRes = busi;
    });
  }

  addBusiness(
    company: string,
    category: string,
    years_in_business: string,
    description: string,
    phone: string,
    email: string,
    street_address: string,
    state: string,
    zpicode: string) {

    var created_at = new Date().toString();
    var newBusinessContact = {
      company: company,
      category: category,
      years_in_business: years_in_business,
      description: description,
      phone: phone,
      email: email,
      street_address: street_address,
      state: state,
      zpicode: zpicode,
      created_at: created_at
    };
    console.log(newBusinessContact);

    this._firebaseService.addBusinessContact(newBusinessContact);

    //this.changeState('default');
    // console.log(newBusinessContact);

  }

  showEdit(busine) {
    this.changeState('edit', busine.$key);
    this.activeCompany = busine.company;
    this.activeCategory = busine.category;
    this.activeYearsinBusiness = busine.years_in_business;
    this.activeDescription = busine.description;
    this.activePhone = busine.phone;
    this.activeEmail = busine.email;
    this.activeStreetAddress = busine.street_address;
    this.activeZipcode = busine.zpicode;
    this.activeState = busine.state;
  };
  UpdateBusiness(){
    var updBusiness = {
      company: this.activeCompany, 
      category: this.activeCategory,
      years_in_business: this.activeYearsinBusiness,
      description: this.activeDescription,
      phone: this.activePhone,
      email: this.activeEmail,
      street_address: this.activeStreetAddress,
      zpicode: this.activeZipcode,
      state: this.activeState
    };

    this._firebaseService.updateBusiness(this.activeKey, updBusiness);
    // this._firebaseService.updateBuse(updBusiness)
  }

  deleteBusiness(key){
    this._firebaseService.deleteBusiness(key);
  }
}
