import React, {createContext, useState, useContext} from 'react';
import {NOTIFICATION_ENUM} from "../enums";
import {Snackbar} from "@mui/material";
import MuiAlert, {AlertProps} from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Notification = {
    message: string;
    type: NOTIFICATION_ENUM
}

let initialValue = {
    hideNotification: () => {
    },
    showNotification(message: string, type: NOTIFICATION_ENUM) {
    }
}
const NotificationContext = createContext(initialValue);

export const useNotification = () => useContext(NotificationContext);

const Notification = ({children}: { children: React.ReactNode }) => {
    const [notification, setNotification] = useState<Notification | null>(null);
    const [show, setShow] = useState<boolean>(false)
    const showNotification = (message: string, type: NOTIFICATION_ENUM) => {
        setNotification({message, type});
        setShow(true)
    };

    const hideNotification = () => {
        setNotification(null);
        setShow(false)
    };

    return (
        <NotificationContext.Provider value={{showNotification, hideNotification}}>
            {children}
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={show}
                autoHideDuration={6000}
                onClose={hideNotification}
            >
                <Alert onClose={hideNotification} severity={notification?.type} sx={{width: '100%'}}>
                    {notification?.message}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    );
};

export default Notification;
