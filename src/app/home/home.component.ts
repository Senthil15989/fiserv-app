import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public categoryListArray : string[];
	// Search Form params
    public documentSearchForm: FormGroup;

    // search params
    public searchQuery: string;
	public selectedCategory: string = "All";
	// document result
    public documentArray: any;

    public documentFilteredArray: any = [];

  	constructor(
		private formBuilder: FormBuilder,
	  ) { 
		this.documentSearchForm = this.formBuilder.group({
            documentSearchQuery: new FormControl(''),
        });
	  }

  	ngOnInit(): void {
		this.categoryListArray = ['All', 'Financial', 'Technical', 'Marketing', 'Human Resources'];
		this.documentArray = [
            {
                "type" : "Technical",
                "name" : "Terminal Instructables"
            },
            {
                "type" : "Technical",
                "name" : "Installation guides"
            },
            {
                "type" : "Human resources",
                "name" : "Career opportunities"
            },
            {
                "type" : "Financial",
                "name" : "Customer onboarding"
            },
            {
                "type" : "Marketing",
                "name" : "Outlet branding"
            },
            {
                "type" : "Financial",
                "name" : "Accounting procedures"
            },
            {
                "type" : "Human resources",
                "name" : "Training"
            },
            {
                "type" : "Marketing",
                "name" : "Printing guidance"
            },
            {
                "type" : "Technical",
                "name" : "Technical support"
            }
        ];
        this.documentFilteredArray = this.documentArray;
  	}

  	selectCategory(category) {
        this.documentFilteredArray = [];
        this.selectedCategory = category;
        if(category == "All") {
            this.documentFilteredArray = this.documentArray;
        } else {
            this.documentFilteredArray = this.documentArray.filter((document) => document.type.toLowerCase() === category.toLowerCase());
        }
    }

	onDocumentSearch() {
        this.documentFilteredArray = [];
        this.documentFilteredArray = this.documentArray.filter((document) => document.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

}
