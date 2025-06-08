import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class WireApexDemo extends LightningElement {
   accountlist
    @wire(getAccountList)
    accounts

    @wire(getAccountList)
    AccountHandler({data,error}){
        if(data){
            this.accountlist = data.map(item=>{
                let newtype =  item.type === 'Customer - Direct' ? 'Direct':
                                item.type === 'Customer - Channel'? 'Channel' : '------'
                
                 console.log('ACC TYPE ' + newtype)               
                  return {...item, newtype}
                
            })
        }
        if(error){
            console.error(error)
        }

    }
}