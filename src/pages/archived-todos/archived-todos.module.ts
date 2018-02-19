import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchivedTodosPage } from './archived-todos';

@NgModule({
  declarations: [
    ArchivedTodosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchivedTodosPage),
  ],
  entryComponents: [
    ArchivedTodosPage
  ]
})
export class ArchivedTodosPageModule {}
