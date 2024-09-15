import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private navController: NavController) {

    this.formRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'edad': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    })

  }


  ngOnInit() {

  }

  async onSave(){
    const form = this.formRegistro.value;

    // Datos válidos para registrarse
    const formValidoRegister: { [key: string]: any } = {
      apellido: "Arce",
      nombre: "Ariel",
      edad: "23",
      email: "ariel123@gmail.com",
      contraseña: "123123123"
    };

    // Comparar cada campo del formulario con los datos válidos
    const formIsValid = Object.keys(formValidoRegister).every(
      (key) => form[key] === formValidoRegister[key]
    );

    if(this.formRegistro.invalid || !formIsValid){
      const alert = await this.alertController.create({
        header: 'Datos inválidos',
        message: 'Tienes campos inválidos, por favor vuelve a revisar',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }else{
      this.navController.navigateRoot('/tabs/home');
    }

  }
}
