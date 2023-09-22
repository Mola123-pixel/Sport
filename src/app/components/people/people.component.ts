import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit{

  public People = <any>{ items: [], totalCount: 0};
  public filter = <any>{ keyword: "", pageNumber: 1, pageSize: 10 };

  public constructor(private PeopleService: PeopleService){}
  
  ngOnInit(): void {
    this.find();
  }

  public async find(): Promise<void> {
    this.PeopleService.findAll<any>(this.filter.keyword, this.filter.statusId, this.filter.pageNumber, this.filter.pageSize).subscribe(
      people => {
        this.People = people;
      });
  }

}
