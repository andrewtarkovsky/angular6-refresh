import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { HiddenwordComponent } from './hiddenword/hiddenword.component';
import { OperableServerComponent } from './operable-server/operable-server.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { EvenComponent } from './game-control/even/even.component';
import {TestService} from './test.service';
import {TestsuperService} from './testsuper.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HiddenwordComponent,
    OperableServerComponent,
    ServerEditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TestService, TestsuperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
