public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id,Name, Type, Industry FROM Account LIMIT 5];

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> FilteredAccountType(string type) {
        return [SELECT Id,Name, Type, Industry FROM Account where Type =: type LIMIT 5];

    }
}