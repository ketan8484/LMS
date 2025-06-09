import { LightningElement,wire } from 'lwc';
import FilteredAccountType from '@salesforce/apex/AccountController.FilteredAccountType'
export default class FilteredAccounttypeWiredDemo extends LightningElement {
    selectedtype=''
    @wire(FilteredAccountType , {type:'$selectedtype'})
    filteredaccounts

    get typeOptions(){
        return[
            {label:"Customer - Direct", value:"Customer - Direct"},
            {label:"Customer - Channel", value:"Customer - Channel"}
        ]
    }
//Ketan kulkarni 23
    handlechange(event){
        this.selectedtype = event.target.value
    }

}