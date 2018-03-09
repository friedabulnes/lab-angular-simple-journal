import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-singleentry',
  templateUrl: './singleentry.component.html',
  styleUrls: ['./singleentry.component.css']
})
export class SingleentryComponent implements OnInit {

  journalOne: any;

  constructor(
    private journalS: JournalService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPhoneDetails(params['id']);
    });
  }
  getPhoneDetails(id) {
    this.journalS.get(id)
    .subscribe((j) => {
      this.journalOne = j;
    });
  }

}