import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit() {
    alert();
  }

  showTerms() {
    alert();
  }
}
