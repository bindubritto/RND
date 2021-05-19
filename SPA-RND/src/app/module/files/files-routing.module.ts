import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadComponent } from './download/download.component';
import { UploadComponent } from './upload/upload.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'download',
        component: DownloadComponent,
      },
      {
        path: 'upload',
        component: UploadComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
