import { Component, OnInit, Input, Inject, PLATFORM_ID, Optional, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  langs = ['en', 'fr'];
  constructor(public translate: TranslateService) {
    translate.addLangs(this.langs);
    translate.setDefaultLang(this.langs[0]);
  }

  public ngOnInit(): void {
  }

  public switchLang(lang: string) {
    this.translate.use(lang);
  }
}
