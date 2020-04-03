import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-termsmodal',
  templateUrl: './termsmodal.component.html',
  styleUrls: ['./termsmodal.component.css']
})
export class TermsmodalComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
