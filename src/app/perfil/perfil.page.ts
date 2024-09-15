import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  formPerfil: FormGroup;
  imageSrc: string = 'assets/img/ionic-logo.png'; // Ruta a la imagen de placeholder


  constructor(public fb: FormBuilder,
    private navController: NavController) {
    this.formPerfil = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'edad': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    })
   }



  ngOnInit() {
    var form = this.formPerfil.value;
    this.formPerfil.patchValue({
      apellido: "Arce",
      nombre: "Ariel",
      edad: "23",
      email: "ariel123@gmail.com",
      contraseña: "123123123"
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string; // Actualiza la imagen con la nueva seleccionada
      };
      reader.readAsDataURL(file);
    }
  }

  async modificar(){
    this.navController.navigateRoot('/tabs/home');
  }

}
