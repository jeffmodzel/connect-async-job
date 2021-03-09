export interface JobDynamoItem {
    JobId: string;
    CreateDateTime: string;
    JobType: string;
    LastUpdateDateTime: string;
    Payload: string;
    Result: string;
    Status: string;
    StatusMessage: string;
}

export interface AttributeMap {
    [key: string]: string;
}