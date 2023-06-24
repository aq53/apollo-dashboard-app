import React from "react";
import {useParams} from "react-router-dom";
import {useGetUserDetailQuery} from "../../store/users";
import {Box, Card, Grid, Paper, Typography} from "@mui/material";
import UsernameIcon from "@mui/icons-material/TextFieldsTwoTone";
import EmailIcon from "@mui/icons-material/EmailTwoTone";
import PhoneIcon from "@mui/icons-material/ContactPhone";
import LocationIcon from "@mui/icons-material/LocationOnTwoTone";
import WebsiteIcon from "@mui/icons-material/LanguageTwoTone";
import CompanyIcon from "@mui/icons-material/BusinessTwoTone";
import CustomTable from "../../components/CustomTable";
import {useGetPostByUserIdQuery} from "../../store/posts";
import {POST_TABLE_COLUMNS} from "../../constants";


const IconColor = '#10b981'
export default function UserDetail() {
    const params = useParams();
    const {data: userDetail, isLoading: isLoadingUser} = useGetUserDetailQuery(params?.id || "")
    const {data: posts = [], isLoading: isLoadingPosts} = useGetPostByUserIdQuery(params?.id || '')
    return (
        <Box>

            <Card className="p-3">
                <Typography variant={'h4'}>{userDetail?.name}</Typography>
                <Box className={"mt-3"}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className={"flex items-center"}>
                            <Box className={"mr-2"}>
                                <UsernameIcon sx={{color: IconColor}} className={'accent-green-500'}/>
                            </Box>
                            <Box>
                                <p className={"font-bold"}>{userDetail?.username}</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6} className={"flex items-center"}>
                            <Box className={"mr-2"}>
                                <EmailIcon sx={{color: IconColor}} className={'accent-green-500'}/>
                            </Box>
                            <Box>
                                <p className={"font-bold"}>{userDetail?.email}</p>
                            </Box>
                        </Grid>


                        <Grid item xs={6} className={"flex items-center"}>
                            <Box className={"mr-2"}>
                                <PhoneIcon sx={{color: IconColor}} className={'accent-green-500'}/>
                            </Box>
                            <Box>
                                <p className={"font-bold"}>{userDetail?.phone}</p>
                            </Box>
                        </Grid>

                        <Grid item xs={6} className={"flex items-center"}>
                            <Box className={"mr-2"}>
                                <LocationIcon sx={{color: IconColor}} className={'accent-green-500'}/>
                            </Box>
                            <Box>
                                <p className={"font-bold"}>
                                    {`${userDetail?.address.street}, ${userDetail?.address.suite}, 
                                ${userDetail?.address.city}, ${userDetail?.address.zipcode}`}
                                </p>
                            </Box>
                        </Grid>

                        <Grid item xs={6} className={"flex items-center"}>
                            <Box className={"mr-2"}>
                                <WebsiteIcon sx={{color: IconColor}} className={'accent-green-500'}/>
                            </Box>
                            <Box>
                                <p className={"font-bold"}>
                                    {userDetail?.website}
                                </p>
                            </Box>
                        </Grid>

                        <Grid item xs={6} className={"flex items-center"}>
                            <Box className={"mr-2"}>
                                <CompanyIcon sx={{color: IconColor}} className={'accent-green-500'}/>
                            </Box>
                            <Box>
                                <p className={"font-bold"}>
                                    {userDetail?.company.name}
                                </p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Card>


            <Card className={"mt-4 p-3"}>
                <Typography variant={'h4'}>Posts</Typography>
                <CustomTable columns={POST_TABLE_COLUMNS} rows={posts} isLoading={isLoadingPosts}/>

            </Card>
        </Box>
    )
}

