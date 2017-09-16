import { ToastyService, ToastOptions } from "ng2-toasty";
import { NgForm } from "@angular/forms";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { Ticket } from "./../ticket";
import { UploadFileSimpleService } from "./../services/upload-file-with-progress-bar.service";

@Component({
  selector: "app-upload-file-simple",
  templateUrl: "./create-bordado.component.html",
  styleUrls: ["./create-bordado.component.css"],
  providers:[UploadFileSimpleService]
})
export class CreateBordadoComponent implements OnInit {
  @ViewChild("screenshotInput") screenshotInput: ElementRef;
  model = new Ticket();

  constructor(
    private uploadService: UploadFileSimpleService,
    private toastyService: ToastyService
  ) {}

  ngOnInit() {}

  fileChange(event) {
    const filesList: FileList = event.target.files;
    console.log("fileChange() -> filesList", filesList);
  }

  submitForm(form: NgForm) {
    console.log("this.model", this.model);
    console.log("form.value", form.value);

    const fileInput: HTMLInputElement = this.screenshotInput.nativeElement;
    console.log("fileInput.files", fileInput.files);

    this.uploadService
      .postTicket(this.model, fileInput.files)
      .subscribe(data => {
        console.log("success: ", data);
        this.toastyService.success(
          <ToastOptions>{
            title: "Success!",
            msg:
              "Your ticket has been submitted successfully and will be resolved shortly!",
            theme: "bootstrap",
            showClose: true,
            timeout: 15000
          }
        );
      });
  }
}