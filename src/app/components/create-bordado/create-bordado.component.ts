    import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgForm } from "@angular/forms";
import { Component, OnInit, ViewChild, ElementRef,ViewContainerRef } from "@angular/core";
import { Ticket } from "./../ticket";
import { UploadFileSimpleService } from "./../services/upload-file-with-progress-bar.service";
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: "app-upload-file-simple",
  templateUrl: "./create-bordado.component.html",
  styleUrls: ["./create-bordado.component.scss"],
  providers:[UploadFileSimpleService]
})
export class CreateBordadoComponent implements OnInit {
  @ViewChild("screenshotInput") screenshotInput: ElementRef;
  model = new Ticket();

  constructor(
    private uploadService: UploadFileSimpleService,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private _router: Router,
    private route: ActivatedRoute
  ) {this.toastr.setRootViewContainerRef(vcr);}

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
        this.showSuccess()
        setTimeout(() => {
                   this._router.navigate(['/cards']);
                 },500);
      },(errRes) =>{this.showError()});
  }
      showSuccess() {
        this.toastr.success('Entry created!', 'Success!');
      }

      showError() {
        this.toastr.error('Something went wrong.Retry!', 'Oops!');
      }
}