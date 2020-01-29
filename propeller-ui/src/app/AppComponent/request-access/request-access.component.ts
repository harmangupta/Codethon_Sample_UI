import { Component, OnInit, Input } from '@angular/core';
import { RequestAccess } from 'src/app/model/request-access';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.css']
})
export class RequestAccessComponent implements OnInit {

  @Input() requestAccess: RequestAccess;
  constructor() { }

  ngOnInit() {
    this.requestAccess = {
      businessUnit: 'Technology',
      division: 'WM Technology',
      superDepartment: 'Global Banking Tech',
      department: 'GBT MSHL Technology',
      projects:[{name:'Project 1'}, {name:'Project 2'}, {name:'Project 3'}],
      accessBundles:[{name:'Access Bundle 1'}, {name:'Access Bundle 2'}, {name:'Access Bundle 3'}],
      resourceList: [
        {isSelected: true, resourceType: "Firmwide", resourceName: "Mailing Group", resourceValue: "mshlit-abc"},
        {isSelected: true, resourceType: "EPR", resourceName: "EPR Role", resourceValue: "It Developer"},
        {isSelected: true, resourceType: "EPR", resourceName: "EPR Group", resourceValue: "mshlit-xyz"}
      ]
    }
  }

  accessBundleSelected(evt) {
    console.log(evt);//    this.selectedAccessBundle = evt.
  }

}
