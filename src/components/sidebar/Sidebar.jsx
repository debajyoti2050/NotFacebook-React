import "./sidebar.css";
import React from 'react';
import ReactDOM from 'react-dom';
import CloseFriends from "../closeFriends/CloseFriends";
import {Users} from '../../dummyData'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';



export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className="sidebarIcon"/>
                    <span className="sidebarListItem">Feed</span>

                </li>

                <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon"/>
                    <span className="sidebarListItem">Chats</span>

                </li>

                <li className="sidebarListItem">
                    <PlayCircleOutlineIcon className="sidebarIcon"/>
                    <span className="sidebarListItem">Videos</span>

                </li>
      
                <li className="sidebarListItem">
                  <GroupIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Groups</span>

                </li>
                      <li className="sidebarListItem">
                  <BookmarkIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Bookmarks</span>
                </li>


                <li className="sidebarListItem">
                  <HelpOutlineIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Questions</span>
                </li>


                <li className="sidebarListItem">
                  <WorkOutlineIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Jobs</span>
                </li>


                <li className="sidebarListItem">
                  <EventIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Events</span>
                </li>

                <li className="sidebarListItem">
                  <SchoolIcon className="sidebarIcon" />
                  <span className="sidebarListItemText">Courses</span>
                </li>      

            </ul>

            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">

            {Users.map(f=>(
            <CloseFriends key={f.id} friends={f}/>
          ))}

            </ul>

        </div>
    </div>
  )
}
