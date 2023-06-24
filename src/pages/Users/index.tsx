import React from "react";
import {useGetUsersQuery} from "../../store/users";
import {Box, Card, Skeleton, Typography} from "@mui/material";
import CustomTable from "../../components/CustomTable";
import {useNavigate} from "react-router-dom";
import {Row} from "../../types/Table";
import {POST_TABLE_COLUMNS, USER_TABLE_COLUMNS} from "../../constants";
import {useGetPostsQuery} from "../../store/posts";

export default function Users() {
    const {data: users = [], isLoading: isLoadingUser} = useGetUsersQuery()
    const {data: posts = [], isLoading: isLoadingPosts, error} = useGetPostsQuery()
    const navigate = useNavigate();
    const routeToUserDetails = (row: Row) => {
        navigate(`/users/${row.id}`)
    }

    return (
        <Box>
            <Card className="p-3">
                <Typography variant={'h4'}>
                    Users
                </Typography>
                <CustomTable
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


            <Card className="p-3 mt-4">
                <Typography variant={'h4'}>
                    Posts
                </Typography>
                <CustomTable
                    columns={POST_TABLE_COLUMNS}
                    rows={posts}
                    isLoading={isLoadingPosts}
                />
            </Card>

        </Box>
    );
}
