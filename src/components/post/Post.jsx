import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
             <div className="postTopLeft">
                 <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                 <span className="postUsername">Cheems Doge</span>
                 <span className="postDate">1hour ago</span>
             </div>
             <div className="postTopRight">
                 <MoreVertIcon/>
             </div>
            </div>
            
            <div className="postCenter"></div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}
