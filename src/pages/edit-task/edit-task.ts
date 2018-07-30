import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../model/task/task.model';
import { TaskListService } from '../../services/taskList.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {

  task: Task ={
    title: '',
    description : '',
    status: false
  }
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public taskListService: TaskListService) {
  }

  ionViewDidLoad() {
    this.task = this.navParams.get('task');
  }

  updateTask(task : Task) {
    this.taskListService.updateTask(task).then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeTask(task : Task) {
    this.taskListService.removeTask(task).then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

}
