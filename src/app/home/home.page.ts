import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeesPage } from 'src/app/pages/employee-dept/employees/employees.page';
import { InitializeAppService } from 'src/app/services/initialize.app.service';
import { SQLiteService } from 'src/app/services/sqlite.service';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
  isListDisplay: boolean = false;
  isAndroid: boolean = false;
  isNative: boolean = false;

  constructor(private initAppService: InitializeAppService,
    private sqliteService: SQLiteService,
    private modalCtrl: ModalController) {
      this.isListDisplay = this.initAppService.isAppInit;
  }
  async ngOnInit() {
    if (this.initAppService.platform === 'android') {
      this.isAndroid = true;
    }
    this.isNative = this.sqliteService.native;
  }
  async employeesClick() {
    const modal = await this.modalCtrl.create({
      component: EmployeesPage,
      canDismiss: true
    });
    modal.present();
  }

  exitApp() {
    App.exitApp();
  }

}
