import React, {useMemo} from "react";
import "../../components/DashboardWidget/styles.css";
import {Box, Grid} from "@mui/material";
import DashboardWidget from "../../components/DashboardWidget";
import Posts from "../Posts";
import Users from "../Users";
import {useGetUsersQuery} from "../../store/users";
import {useGetPostsQuery} from "../../store/posts";

export default function Dashboard() {
    const {data: users = []} = useGetUsersQuery()
    const {data: posts = []} = useGetPostsQuery()

    const averagePostCount = useMemo(() => {
        let counts = [];

        for (let user of users) {
            let filteredPosts = posts.filter(post => post.userId === user.id)
            counts.push(filteredPosts.length);
        }
        const sum = counts.reduce((acc, curr) => acc + curr, 0);
        const average = sum / counts.length;

        return average || 0;
    }, [posts, users])


    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                    <DashboardWidget title={'Number of Users'} count={users.length}/>
                </Grid>
                <Grid item xs={4}>
                    <DashboardWidget title={'Number of Posts'} count={posts.length}/>
                </Grid>
                <Grid item xs={4}>
                    <DashboardWidget title={'Average Posts per User'} count={averagePostCount}/>
                </Grid>

            </Grid>

            <Users/>

            <Posts/>

        </Box>

    );
}

