import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText"><b>Chimki Singh</b> and <b>3 other friends</b> have birthdays today.</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
              src="assets/person/3.jpeg" alt="" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dogender Singh</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
              src="assets/person/3.jpeg" alt="" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dogender Singh</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
              src="assets/person/3.jpeg" alt="" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dogender Singh</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
              src="assets/person/3.jpeg" alt="" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dogender Singh</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
              src="assets/person/3.jpeg" alt="" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dogender Singh</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
              src="assets/person/3.jpeg" alt="" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dogender Singh</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
              src="assets/person/3.jpeg" alt="" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dogender Singh</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
