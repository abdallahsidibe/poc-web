import { Component, OnInit } from '@angular/core';
import {ReposModule} from "../model/repos/repos.module";
import { TelephoneServiceService } from 'src/app/services/telephone-service.service';

@Component({
  selector: 'app-liste-telephones',
  templateUrl: './liste-telephones.component.html',
  styleUrls: ['./liste-telephones.component.css']
})
export class ListeTelephonesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
