import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs';
import { Task } from '../../model/task/task.model';
import { TaskListService } from '../../services/taskList.service';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  taskList: Observable<Task[]>

  constructor(public navCtrl: NavController, private taskListService: TaskListService) {
    this.taskList = this.taskListService.getTaskList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

}
