import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  langs = ['en', 'fr'];

  constructor(public translate: TranslateService) {
    translate.addLangs(this.langs);
  }

  public ngOnInit(): void {
    const  currentLanguage  =  this.translate.getBrowserLang();
    switch (currentLanguage) {
      case 'en': {
        this.translate.use(this.langs[0]);
        break;
      }
      case 'fr': {
        this.translate.use(this.langs[1]);
        break;
      }
    }
  }

  public switchLang() {
    const lang = document.getElementById('set_lang');
    if (lang.innerHTML === 'Français') {
      this.translate.use(this.langs[1]);
    } else {
      this.translate.use(this.langs[0]);
    }
  }
}
