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
        MatPaginatorModule
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
        MatPaginatorModule
    ]
})
export class MaterialModule{}