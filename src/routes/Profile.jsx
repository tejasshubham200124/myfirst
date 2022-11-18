import React from "react";
import Layout from "../pages/layout/Layout";
import "./profile.css";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineUsergroupAdd} from "react-icons/ai";
function Profile() {
  return (
    <Layout>
      <div className="container">
        <div className="c-dts">
        <h1>Account Settings</h1>
        <p>Manage your Software solutions</p>
        </div>
        <div className="inner-container">
          <div className="inner-contentt">
            <div class="card">
              <div class="card-body">
                <div className="profile-manager">
                  <div className="profile-icon">
                    <CgProfile size={35} />
                  </div>
                  <div className="profile-details">
                    <h3>Personal details</h3>
                    <p>Update your info and find out how its used</p>
                    <Link to ="/Updateprofile">
                    <p className="p-dts">Manage personal details</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-contentt">
            <div class="card">
              <div class="card-body">
              <div className="profile-manager">
                  <div className="profile-icon">
                    <AiOutlineBars size={35} />
                  </div>
                  <div className="profile-details">
                    <h3>Preferences</h3>
                    <p>Change your language,currency and accessibility and requirements</p>
                    <p className="p-dts">Manage preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-container">
          <div className="inner-contentt">
            <div class="card">
              <div class="card-body">
                <div className="profile-manager">
                  <div className="profile-icon">
                    <FaLock size={35} />
                  </div>
                  <div className="profile-details">
                    <h3>Security</h3>
                    <p>Adjust your security setting and add two factor-authentication</p>
                    <p className="p-dts">Manage account security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-contentt">
            <div class="card">
              <div class="card-body">
              <div className="profile-manager">
                  <div className="profile-icon">
                    <MdOutlinePayments size={35} />
                  </div>
                  <div className="profile-details">
                    <h3>Payment details</h3>
                    <p>Securely add or remove payment methods</p>
                    <p className="p-dts">Manage payment  details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-container">
          <div className="inner-contentt">
            <div class="card">
              <div class="card-body">
                <div className="profile-manager">
                  <div className="profile-icon">
                    <MdOutlineNotifications size={35} />
                  </div>
                  <div className="profile-details">
                    <h3>Email Notification</h3>
                    <p>Decide what you wanted to be notified about</p>
                    <p className="p-dts">Manage notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-contentt">
            <div class="card">
              <div class="card-body">
              <div className="profile-manager">
                  <div className="profile-icon">
                    <AiOutlineUsergroupAdd size={35} />
                  </div>
                  <div className="profile-details">
                    <h3>Other travellers</h3>
                    <p>Add or edit info about people you are travelling with</p>
                    <p className="p-dts">Manage travellers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
