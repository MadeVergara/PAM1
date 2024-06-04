import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
export class LoginPage implements OnInit {
  
  animate = false;
  usuario: string="";
  password: string="";

  constructor(private alertController:AlertController,private navCtrl:NavController, private router:Router) { }

  ngOnInit() {
  }

  login (){
    if (this.usuario.trim()== "usuario" && this.password.trim() == "password") {
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      }
      this.router.navigate(['/home'],NavigationExtras);
    }
    else{
      this.presentAlert('incorrecto');
    }
  }

  toggleAnimation() {
    this.animate = !this.animate;
  }



  async presentAlert (message: string){
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  goToPerfil () {
    this.navCtrl.navigateForward('/perfilu');
  }
}
