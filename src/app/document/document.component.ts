import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

    @Input() documentArray: any;

    constructor() {}

    ngOnInit(): void {
    };

    getBackgroundColor(documentType) {
        switch(documentType) {
            case 'Technical':
                return '#E7DFEB';
            case 'Human resources':
                return '#DEEAE9';
            case 'Financial' :
                return '#E5EADE';
            case 'Marketing' :
                return '#EAE4DE';
            
        }
    }

}
