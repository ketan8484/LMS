import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { subscribe,unsubscribe,MessageContext,APPLICATION_SCOPE } from 'lightning/messageService';
export default class LmsComponentB extends LightningElement {
    receiveMessage
    @wire(MessageContext)
    context
    subscription

    connectedCallback(){
        this.subscribeMessage()
    }
    subscribeMessage(){
         this.subscription = subscribe(this.context,SAMPLEMC,(message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.receiveMessage = message.lmsData.value? message.lmsData.value : 'No Message pulished'
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription) 
        this.subscription  = NULL
    }
}