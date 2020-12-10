import {NgModule} from '@angular/core';

import{
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatDividerModule,
        MatIconModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatDividerModule,
        MatIconModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatDialogModule
    ]
})
export class MaterialModule{}