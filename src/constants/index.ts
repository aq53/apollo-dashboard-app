import exp from "constants";

export const USER_TABLE_COLUMNS = [
    {key: 'name', label: 'Name'},
    {key: 'email', label: 'Email'},
    {key: 'phone', label: 'Phone'},
    {key: 'company', label: 'Company'}
]

export const POST_TABLE_COLUMNS = [
    {key: 'id', label: 'Id'},
    {key: 'title', label: 'Title'},
    {key: 'body', label: 'Body'},
]


export const NOTIFICATION_MESSAGES = {
    INTERNET_DISCONNECTED: 'Internet disconnected!',
    INTERNET_CONNECTED: 'Internet connected!',
}
