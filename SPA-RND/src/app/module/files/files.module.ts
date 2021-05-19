import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadComponent } from './download/download.component';
import { UploadComponent } from './upload/upload.component';
import { FilesRoutingModule } from './files-routing.module';


@NgModule({
  declarations: [DownloadComponent, UploadComponent],
  imports: [
    FilesRoutingModule,
    CommonModule
  ]
})
export class FilesModule { }
