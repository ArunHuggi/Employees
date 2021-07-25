import React, { Fragment } from "react";
import Spinner from "../layout/Spinner";

const ProfileTop = ({ profile }) => {
  const {
    dateOfBirth,
    email,
    title,
    firstName,
    lastName,
    gender,
    id,
    location,
    phone,
    picture,
    registerDate,
  } = profile;

  return (
    <Fragment>
      {profile !== null ? (
        <Fragment>
          <div className="profile-top bg-primary m-4 p-2 profile_top">
            {picture ? (
              <img className="round-img my-1" src={picture} alt="" />
            ) : (
              <img
                className="round-img my-1"
                src={"https://i.pravatar.cc/300"}
                alt=""
              />
            )}
            <h1 className="large">
              {title.charAt(0).toUpperCase() + title.substring(1)} {firstName}{" "}
              {lastName}
            </h1>
            <p className="lead">
              <i class="fa fa-0.75x fa-map-marker" aria-hidden="true"></i>
              <span style={{ marginLeft: "0.5rem" }}>
                {location.city}, {location.country}
              </span>
            </p>
            {/* <p>{location.city},{location.country}{location.street}</p> */}

            <p className="user-details">{gender}</p>
            <p className="user-details">Phone: {phone}</p>
            <p className="user-details">
              DOB:{new Date(dateOfBirth).toDateString().substring(4)}
            </p>
            <p className="user-details">
              Date of Joining:
              {new Date(registerDate).toDateString().substring(4)}
            </p>
            <p className="user-details">{email}</p>
            <div className="icons my-1">
              <p href="#!" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe fa-2x"></i>
              </p>

              <p href="#!" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-2x"></i>
              </p>

              <p href="#!" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-2x"></i>
              </p>

              <p href="#!" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x"></i>
              </p>
              <p href="#!" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube fa-2x"></i>
              </p>
              <p href="#!" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
              </p>
            </div>
          </div>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default ProfileTop;