import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/user.Name'
import EMAIL_FIELD from '@salesforce/schema/user.Email'
const fields = [NAME_FIELD,EMAIL_FIELD]
export default class WireDemouserDetail extends LightningElement {
    userId = id
    userDetail
    //@wire(getRecord, {recordId:'005dM000007rj6DQAQ' , fields:['user.Name', 'user.Email']})
    //reactive means once the data available update it
    //to make property reactive in wire adapter - we need to usee $ before property in single quote.
    @wire(getRecord, {recordId:'$userId' ,fields})
    userDetailHandler({data,error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.log(error)
        }
    }

    @wire(getRecord, {recordId:'$userId' , fields})
    userDetailProperty
}
