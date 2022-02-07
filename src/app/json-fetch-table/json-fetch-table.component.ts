import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs';
import { DataFetchService } from '../data-fetch.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-json-fetch-table',
  templateUrl: './json-fetch-table.component.html',
  styleUrls: ['./json-fetch-table.component.css']
})
export class JsonFetchTableComponent implements OnInit{
  displayedColumns = [
    "userId",
    "jobTitleName",
    "firstName",
    "lastName",
    "preferredFullName",
    "employeeCode",
    "region",
    "phoneNumber",
    "emailAddress"
  ];
  dataSource: any;
  constructor(public http:HttpClient,
  private dataFetch:DataFetchService) { }

  ngOnInit(): void {
    this.dataFetch.getData()
    .subscribe(response=>{
      this.dataSource = response;
     console.log(this.dataSource);
    })

  }

}
