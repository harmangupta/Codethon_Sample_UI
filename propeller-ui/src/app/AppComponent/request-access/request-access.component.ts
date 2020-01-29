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
      projectSelected: 'Digital Mortgages',
      accessBundleSelected: 'IT DEV Access',
      projects:[{name:'Digital Mortgages'}, {name:'Money Movement Next Gen'}, {name:'Lonestar'}],
      accessBundles:[{name:'IT DEV Access'}, {name:'BA Access'}, {name:'DB Admin'}],
      resourceList: [
        {isSelected: true, resourceType: "Firmwide", resourceName: "Mailing Group", resourceValue: "mshlit-abc"},
        {isSelected: true, resourceType: "EPR", resourceName: "EPR Role", resourceValue: "It Developer"},
        {isSelected: true, resourceType: "EPR", resourceName: "EPR Group", resourceValue: "mshlit-xyz"}
      ]
    }
  }

  initiateAccessRequestProcess() {
    //do something meaningful here
    console.log('here');
  }
}
