# connect-async-job
Amazon Connect asynchronous jobs


job types

LOOKUP_CUSTOMER

LOOKUP_ACCOUNT

LOOKUP_BOGUS


connect event


{
  "Name": "ContactFlowEvent",
  "Details": { 
      ...
      "Parameters": {
        "JobType": "LookupCustomer"
    }
  }
}
