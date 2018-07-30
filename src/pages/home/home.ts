import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs';
import { Task } from '../../model/task/task.model';
import { TaskListService } from '../../services/taskList.service';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  taskList: Observable<Task[]>

  constructor(public navCtrl: NavController, private taskListService: TaskListService) {
    this.taskList = this.taskListService.getTaskList()
      .snapshotChanges().pipe(
      map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
  }

  verificaEstado(status:boolean){
    let logo : string;
    if(status == true){
      logo = 'checkmark';
    } else {
      logo = 'clock';
    }
    return logo;
  }

}
