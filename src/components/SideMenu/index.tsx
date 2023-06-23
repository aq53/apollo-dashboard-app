import React, {useCallback, useMemo} from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {DashboardCustomize, Feed, PeopleAlt} from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';
import {ROUTE_PATHS} from "../../constants/routePaths";
export default function SideMenu({isCompact}:{isCompact:boolean}){
    const navigate=useNavigate();
    const listItemButtonStyle=useMemo(()=>({minHeight: 48,
        justifyContent: isCompact ? 'initial' : 'center',
        px: 2.5,
    }),[isCompact])


    const listItemIconStyle=useMemo(()=>({minWidth: 0,
        mr: isCompact ? 3 : 'auto',
        justifyContent: 'center',
    }),[isCompact])

    const listItemTextStyle=useMemo(()=>({
        opacity: isCompact ? 1 : 0
    }),[isCompact])

    const onClickMenuItem=useCallback((path:string)=>{
        navigate(path)
    },[])

    return(
        <List>
            <ListItem  disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={listItemButtonStyle} onClick={()=>onClickMenuItem(ROUTE_PATHS.DASHBOARD)}>
                    <ListItemIcon sx={listItemIconStyle}>
                        <DashboardCustomize />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" sx={listItemTextStyle} />
                </ListItemButton>

                <ListItemButton sx={listItemButtonStyle} onClick={()=>onClickMenuItem(ROUTE_PATHS.USERS)}>
                    <ListItemIcon sx={listItemIconStyle}>
                        <PeopleAlt />
                    </ListItemIcon>
                    <ListItemText primary="Users" sx={listItemTextStyle} />
                </ListItemButton>


                <ListItemButton onClick={()=>onClickMenuItem(ROUTE_PATHS.POSTS)} sx={listItemButtonStyle}>
                    <ListItemIcon sx={listItemIconStyle}>
                        <Feed />
                    </ListItemIcon>
                    <ListItemText primary="Posts" sx={listItemTextStyle} />
                </ListItemButton>
            </ListItem>
        </List>
    )
}
