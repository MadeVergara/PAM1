import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void <=> *', animate('2s ease-in-out'))
    ])
  ]
})
export class HomePage {
  animate = false;
  usuarioRecibido: string='';
  passwordRecibido: string='';
  nombre: string='';
  apellido: string='';


  constructor(private navCtrl: NavController, private router:Router, private activateroute:ActivatedRoute, private alertController:AlertController) {
    this.activateroute.queryParams.subscribe( params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];

        console.log();
      }
    })
  }

  toggleAnimation() {
    this.animate = !this.animate;
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  mostrar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      
      this.presentAlert('Su nombre es:' +this.nombre+' '+this.apellido);
    }
  }

 


  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
  goToRegister () {
    this.navCtrl.navigateForward('/registro');
  }
}
