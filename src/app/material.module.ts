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
        MatSnackBarModule
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
        MatSnackBarModule
    ]
})
export class MaterialModule{}