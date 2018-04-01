import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    if (form != null) 
      form.reset();


    //reset the models
    this.employeeService.selectedEmployee = {
      EmployeeID : null,
      FirstName : "",
      LastName : "",
      EmpCode : "",
      Position : "",
      Office : "",      
    }
  }

  onSubmit(form : NgForm) {
    this.employeeService.postEmployee(form.value)
      .subscribe( data => {
        this.resetForm(form);
      } )
  }

}
