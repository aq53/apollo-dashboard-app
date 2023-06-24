import React from "react";
import {useGetUsersQuery} from "../../store/users";
import {Box, Card, Typography} from "@mui/material";
import CustomTable from "../../components/CustomTable";
import {useNavigate} from "react-router-dom";
import {Row} from "../../types/Table";
import {NOTIFICATION_MESSAGES, USER_TABLE_COLUMNS} from "../../constants";

export default function Users() {
    const {data: users = [], isLoading: isLoadingUser, isError: isErrorFromGetUsers} = useGetUsersQuery()
    const navigate = useNavigate();
    const routeToUserDetails = (row: Row) => {
        navigate(`/users/${row.id}`)
    }

    return (
        <Box>
            <Card className="p-3 mt-4">
                <Typography variant={'h4'}>
                    Users
                </Typography>
                <CustomTable
                    isError={isErrorFromGetUsers}
                    errorMessage={isErrorFromGetUsers ? NOTIFICATION_MESSAGES.NO_DATA_AVAILABLE : ''}
                    columns={USER_TABLE_COLUMNS}
                    onClickRow={routeToUserDetails}
                    rows={users.map(row => ({
                        id: row.id,
                        name: row.name,
                        email: row.email,
                        phone: row.phone,
                        company: row.company.name,
                    }))}
                    isLoading={isLoadingUser}
                />
            </Card>
        </Box>
    );
}
