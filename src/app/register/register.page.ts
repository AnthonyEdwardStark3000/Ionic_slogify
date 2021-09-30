/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: any;
  password: any;

  constructor(private route: ActivatedRoute,
    public router: Router,
    public afDB: AngularFireDatabase) { }

  ngOnInit() {
  }

  Save()
  {
 if(this.name!= '' &&  this.password!= '' )
 {
  const promise = new Promise((resolve,reject) =>{
      this.afDB.database.ref('slogify').child('employee').push({
        username:this.name,
        password:this.password
      }).then(() =>{
              alert('save successful');
              resolve(true);
              // this.router.navigateByUrl('home');
            });
          });
 }

  }

}
