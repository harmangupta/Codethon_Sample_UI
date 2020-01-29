import { Component, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { FDG_TYPE, TAI_TYPE, AccessEntity } from './models/access.entity.model';
import { AccessBundle } from './models/access.bundle.model';

@Component({
  selector: 'project-managment',
  templateUrl: './project.managment.component.html',
  styleUrls: ['./project.managment.component.css']
})
export class ProjectManagementComponent implements OnInit {

  projects: Project[] = [];
  selectedProject : Project = null;

  isProjectList: boolean = true;

  constructor() { }

  ngOnInit() {
    this.projects.push( {
      name:"p1",
      desc: "mymyt",
      email:"mmcore",
      accessBundles: [
        {
          name: "ab1",
          desc:"its ab",
          accessEntities: [
            {type : FDG_TYPE, eondId:"71486", grn:"thegrn", group:"Wolf", role:"God", team:"alpha"}
          ]
        }
      ]
    } );
    this.resetSelectedProject();
  }

  resetSelectedProject() {
    this.selectedProject = {
      name:"",
      desc: "",
      email:"",
      accessBundles: [
        {
          name: "",
          desc:"",
          accessEntities: [
            {type : FDG_TYPE, eondId:"", grn:"", group:"", role:"", team:""}
          ]
        }
      ]
    } 
  }

  addAccessBundle() {
    this.selectedProject.accessBundles.push({
      name: "",
      desc:"",
      accessEntities: [
        {type : FDG_TYPE, eondId:"", grn:"", group:"", role:"", team:""}
      ]
    })
  }


  addAccessEntity(ab : AccessBundle) {
    ab.accessEntities.push(
      {type : FDG_TYPE, eondId:"", grn:"", group:"", role:"", team:""}
    )
  }

  isFDG(ae: AccessEntity) {
    return ae.type.indexOf(FDG_TYPE) >= 0
  }

  newProject() {
    this.resetSelectedProject();
    this.isProjectList = !this.isProjectList
  }

  projectSelectEvent(project: Project) {
    this.selectedProject = project;
    this.isProjectList = !this.isProjectList
  }

  submit(){
    console.log(this.selectedProject)
    this.projects.push(this.selectedProject)
    this.isProjectList = !this.isProjectList
  }

}
