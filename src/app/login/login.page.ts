import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private navController: NavController) {

    this.formLogin = this.fb.group({
      'email': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    })

  }


  ngOnInit() {
  }

  async ingresar(){
    const form = this.formLogin.value;

    var formValidatorRegister = {
      email: "ariel123@gmail.com",
      contraseña: "123123123"
    };

    var formIsValid = false;

    if(form.email == formValidatorRegister.email && form.contraseña == formValidatorRegister.contraseña){
      formIsValid = true;
    }else{
      formIsValid = false;
    }

    if(this.formLogin.invalid || !formIsValid){
      var alert;
      if(form.email != formValidatorRegister.email){
         alert = await this.alertController.create({
          header: 'El usuario no existe',
          message: 'Por favor intente nuevamente',
          buttons: ['Aceptar']
        });
      }else {
        alert = await this.alertController.create({
          header: 'La contraseña es incorrecta',
          message: 'Por favor intente nuevamente',
          buttons: ['Aceptar']
        });
      }
      await alert.present();
      return;
    }

    this.navController.navigateRoot('/tabs/home');
  }
}
