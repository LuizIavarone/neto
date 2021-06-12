import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  senha;
  sucesso;

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  async showAlertErro() {
    const alert = await this.alertController.create({
      header: 'Email/Senha Errados',
      subHeader: 'Algo de errado não está certo',
      message: 'Verifique as informações e tente novamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Login realizado com sucesso, clique em OK para continuar',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.navigateRoot('/home');
          }
        }
      ]
    });

    await alert.present();
  }

  validador_login(email,senha){
    if(this.email=="admin@admin"){
      if(this.senha=="admin123"){
        this.sucesso = 1;
        this.showAlertSucesso();
      }else{
        this.sucesso = 0;
        this.showAlertErro();
      }
    }else{
      this.sucesso = 0;
      this.showAlertErro();
    }
  }

  ngOnInit() {
  }

}
