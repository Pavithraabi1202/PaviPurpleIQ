import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: any[] | undefined; // Define a property to hold the employee list

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    // Call the method from your service to fetch employee list
    this.service.getEmployeeList().subscribe((data) => {
      // Assign the retrieved employee data to the employeeList property
      this.employeeList = data;
    });
  }
  

  delete(itemId: number) {
    // Implement the logic to delete the item with the given itemId
    console.log('Delete item with ID:', itemId);
    // You can implement the actual deletion logic here
  }
  


}
