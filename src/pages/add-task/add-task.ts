import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../model/task/task.model';
import { TaskListService } from '../../services/taskList.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {

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
    console.log('ionViewDidLoad AddNotePage');
  }

  addTask(task: Task) {
    this.taskListService.addTask(task).then(ref => {
      this.navCtrl.setRoot('HomePage');
    })
  }
}
