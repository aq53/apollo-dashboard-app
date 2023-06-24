import React from "react";
import {Card, Typography} from "@mui/material";
import CustomTable from "../../components/CustomTable";
import {NOTIFICATION_MESSAGES, POST_TABLE_COLUMNS} from "../../constants";
import {useGetPostsQuery} from "../../store/posts";

export default function Posts() {
    const {
        data: posts = [],
        isLoading: isLoadingPosts,
        isError: isErrorFromGetPosts,
    } = useGetPostsQuery()
    return (
        <Card className="p-3 mt-4">
            <Typography variant={'h4'}>
                Posts
            </Typography>
            <CustomTable
                isError={isErrorFromGetPosts}
                errorMessage={isErrorFromGetPosts ? NOTIFICATION_MESSAGES.NO_DATA_AVAILABLE : ''}
                columns={POST_TABLE_COLUMNS}
                rows={posts}
                isLoading={isLoadingPosts}
            />
        </Card>
    );
}
