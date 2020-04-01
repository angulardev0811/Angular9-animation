import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  cards: any[] = [
    {'id':1, 'name':'SHRERBROOKE', 'r_type1':'MRB', 'r_text1':'11','r_type2':'TGA', 'r_text2':'5.25%','r_type3':'MRN', 'r_text3':'18','src':'../assets/img/shared/arrow-down-circle.svg'},
    {'id':2, 'name':'MONTREAL','r_type1':'MRB', 'r_text1':'16','r_type2':'TGA', 'r_text2':'3.97%','r_type3':'MRN', 'r_text3':'24','src':'../assets/img/shared/arrow-up-circle.svg'},
    {'id':3, 'name':'QUEBEC', 'r_type1':'MRB', 'r_text1':'11','r_type2':'TGA', 'r_text2':'5.26%','r_type3':'MRN', 'r_text3':'19','src':'../assets/img/shared/arrow-up-circle.svg'},
    {'id':4, 'name':'GATINEAU', 'r_type1':'MRB', 'r_text1':'11','r_type2':'TGA', 'r_text2':'5.40%','r_type3':'MRN', 'r_text3':'18','src':'../assets/img/shared/arrow-up-circle.svg'},
    {'id':5, 'name':'SAGUENAY', 'r_type1':'MRB', 'r_text1':'9','r_type2':'TGA', 'r_text2':'5.25%','r_type3':'MRN', 'r_text3':'18','src':'../assets/img/shared/arrow-down-circle.svg'},
    {'id':6, 'name':'Trois Rivière', 'r_type1':'MRB', 'r_text1':'9','r_type2':'TGA', 'r_text2':'5.23%','r_type3':'MRN', 'r_text3':'19','src':'../assets/img/shared/arrow-up-circle.svg'},
    {'id':7, 'name':'Laval', 'r_type1':'MRB', 'r_text1':'14','r_type2':'TGA', 'r_text2':'4.84%','r_type3':'MRN', 'r_text3':'22','src':'../assets/img/shared/arrow-up-circle.svg'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

