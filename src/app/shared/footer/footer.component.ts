import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    alert();
  }

  terms() {
    this.router.navigate(['terms']);
  }

  privacy() {
    this.router.navigate(['privacy']);
  }
}
