import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent} from './employee/employee-list.component';
import { EmployeeService} from './employee/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: 'employees', component: EmployeeListComponent },
        { path: '', redirectTo: 'employees', pathMatch: 'full'},
        { path: '**', redirectTo: 'employees', pathMatch: 'full'}
    ]),

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
