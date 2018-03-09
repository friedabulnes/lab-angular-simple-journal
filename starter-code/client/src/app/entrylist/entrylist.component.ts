import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'app-entrylist',
  templateUrl: './entrylist.component.html',
  styleUrls: ['./entrylist.component.css']
})
export class EntrylistComponent implements OnInit {

  journalList:Array<Object>
  constructor(private journalS: JournalService) { }

  ngOnInit() {
    this.journalS.getAllJournal()
    .subscribe(res=>this.journalList=res)
  }

}