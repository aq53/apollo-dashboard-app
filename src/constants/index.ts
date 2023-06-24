import exp from "constants";

export const USER_TABLE_COLUMNS = [
    {key: 'id', label: 'ID', allowSearch: true},
    {key: 'name', label: 'Name', allowSearch: true},
    {key: 'email', label: 'Email', allowSearch: true},
    {key: 'phone', label: 'Phone', allowSearch: true},
    {key: 'company', label: 'Company', allowSearch: true}
]

export const POST_TABLE_COLUMNS = [
    {key: 'id', label: 'ID', allowSearch: true},
    {key: 'userId', label: 'User ID', allowSearch: true},
    {key: 'title', label: 'Title', allowSearch: true},
    {key: 'body', label: 'Body', allowSearch: true},
]


export const NOTIFICATION_MESSAGES = {
    INTERNET_DISCONNECTED: 'Internet disconnected!',
    INTERNET_CONNECTED: 'Internet connected!',
    NO_DATA_AVAILABLE: "No Data Available",
}
