import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InputDialogData } from '../../../core/models/input.dialog.data.model';
import { PhotoService } from '../../../core/services/photo.service';
import { ErrordialogComponent } from '../errordialog/errordialog.component';
import { ErrorDialogData } from '../../../core/models/error.dialog.data.model';
import { CategoryInputDialogService } from '../../../core/services/category.input.dialog.service';

@Component({
    selector: 'app-inputdialog',
    templateUrl: './inputdialog.component.html',
    styleUrls: ['./inputdialog.component.scss'],
})
export class InputdialogComponent implements OnInit {
    category: string ='';
    formGroup: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<InputdialogComponent>,
        private dialog: MatDialog,
        private photoService: PhotoService,
        @Inject(MAT_DIALOG_DATA) public data: InputDialogData,
        private categoryInputEventService: CategoryInputDialogService
    ) {}

    ngOnInit() {
        this.formGroup = new FormGroup({
            category: new FormControl('', [Validators.required, Validators.minLength(3)]),
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {
        this.category = this.formGroup.get('category')!.value;
        this.photoService
            .updateCategoriesList(this.category)
            .subscribe((res) => {
                if (res.success) {
                    this.categoryInputEventService.updateCategoryList(
                        this.category
                    );
                    this.dialogRef.close();
                } else {

                    const data: ErrorDialogData = {
                        messageHeader: 'Error!',
                        messageBody: res.message,
                        duration: 2000,
                    };
                    this.dialog.open(ErrordialogComponent, { data: data });
                }
            });
    }
}
