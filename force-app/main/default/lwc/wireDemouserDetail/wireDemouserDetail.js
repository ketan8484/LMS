import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import id from '@salesforce/user/Id'
export default class WireDemouserDetail extends LightningElement {
    userId = id
    userDetail
    @wire(getRecord, {recordId:'005dM000007rj6DQAQ' , fields:['user.Name', 'user.Email']})
    userDetailHandler({data,error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.log(error)
        }
    }

    @wire(getRecord, {recordId:'005dM000007rj6DQAQ' , fields:['user.Name', 'user.Email']})
    userDetailProperty
}
