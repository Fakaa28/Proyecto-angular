import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../../../mock-tasks'
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
tasks: Task [] =TASKS;
faTimes= faTimes;
}
