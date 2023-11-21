import React from "react";
import ProfilePicture from "../assets/profile-picture.jpg";
import Heart from "../assets/heart-icon.png";
import EyeIcon from "../assets/eye.png";
import StarIcon from "../assets/star.png";
import LikeIcon from "../assets/like.png";
import Diamond from "../assets/diamond.png";
import VerifiedIcon from "../assets/verified.png";


import "./Profile.css";

function Profile({ data }) {
  return (
    <div className="profile">
      <div className="banner__img"></div>
      <div className="profile__details">
        <img src={ProfilePicture} alt="profile" className="profile__pic" />
        <div className="social_details">
          <div className="name">
            <span>{data.username}</span>
            <div className="icon diamond">
              <img src={Diamond} alt="eye" />
            </div>
            <div className="icon verified">
              <img src={VerifiedIcon} alt="eye" />
            </div>
          </div>
          <div className="follow__details">
            <div className="followers">
              <span className="tag">{data.followers}</span>
              <br />
              Followers
            </div>
            <div className="following">
              <span className="tag">{data.following}</span>
              <br />
              Following
            </div>
          </div>
        </div>
        <div className="bio">
          <p className="bio__line">{data.bio}</p>
          <a href={data.instagram} className="instagram">
            {data.instagram}
          </a>
        </div>
        <div className="activities">
          <div className="icon star">
            <img src={StarIcon} alt="eye" />
          </div>
          <span>{data.stars}</span>
          <div className="icon like">
            <img src={LikeIcon} alt="eye" />
          </div>
          <span>{data.Views}</span>
          <div className="icon eye">
            <img src={EyeIcon} alt="eye" />
          </div>
          <span>{data.Views}</span>
          <div className="icon heart">
            <img src={Heart} alt="heart" />
          </div>
          <span>{data.love}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;