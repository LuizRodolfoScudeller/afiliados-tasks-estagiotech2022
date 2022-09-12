import { Badge, Button, Popover } from "antd";
import React, { useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import {
  svgBell,
  svgCloud,
  svgUserIcon,
  svgPageLogo,
} from "../../assets/icons/iconsSVG";
import "../../styles/SCSS/Header/header.scss";
import Notification from "./Notification";
import Download from "./Download";
import { useNotification, useCloud } from "../Store/store";

const btn = {
  backgroundColor: "#FF0037",
  border: "transparent",
  color: "white",
};

const Header = () => {
  let [email, setEmail] = useState("teste@gmail.com");
  let { notification, setNotification } = useNotification();
  let { cloud, setCloud } = useCloud();

  const notificationContent = () => {
    return <Notification />;
  };

  const downloadContent = () => {
    return <Download />;
  };

  const [activeDownloadClick, setActiveDownloadClick] = useState(false);
  const [activeNotificationClick, setActiveNotificationClick] = useState(false);

  const donwloadClick = () => {

    if (activeDownloadClick) {
      return "darker-hover icon-style";
    } else {
      return "icon-style";
    }
  };
  const notificationClick = () => {
    if (activeNotificationClick) {
      return "darker-hover icon-style";
    } else {
      return "icon-style";
    }
  };

  return (
    <>
      <header>
        <div className="logo">{svgPageLogo()}</div>
        <div className="content">
          <section className="user-data">
            <div className="circle-bg">
              <div>{svgUserIcon()}</div>
            </div>
            <p>{email}</p>
          </section>
          <section className="icons">
            <Popover
              content={downloadContent}
              trigger="click"
              showArrow={false}
              style={{fontSize: "24px", padding: "0"}}
            >
              <div className={donwloadClick()}>
                <Badge
                  style={{ color: "#DE0030", backgroundColor: "#fff" }}
                  count={cloud}
                  offset={[3, 30]}
                >
                  <Button
                    onMouseEnter={() => {
                      setActiveDownloadClick(!activeDownloadClick);
                      donwloadClick();
                    }}
                    onMouseLeave={() => {
                      setActiveDownloadClick(!activeDownloadClick);
                      donwloadClick();
                    }}
                    style={btn}
                    type="primary"
                    shape="circle"
                    icon={svgCloud()}
                  />
                </Badge>
              </div>
            </Popover>
            <Popover
              content={notificationContent}
              trigger="click"
              showArrow={false}
            >
              <div className={notificationClick()}>
                <Badge
                  style={{ color: "#DE0030", backgroundColor: "#fff" }}
                  count={notification}
                  offset={[3, 30]}
                >
                  <Button
                    onMouseEnter={() => {
                      setActiveNotificationClick(!activeNotificationClick);
                      notificationClick();
                    }}
                    onMouseLeave={() => {
                      setActiveNotificationClick(!activeNotificationClick);
                      notificationClick();
                    }}
                    style={btn}
                    type="primary"
                    shape="circle"
                    icon={svgBell()}
                  />
                </Badge>
              </div>
            </Popover>
          </section>
          <section className="logout">
            <Button style={btn} type="text">
              <div className="circle-bg">
                <LogoutOutlined style={{ color: "#DE0030" }} />
              </div>
              Sair
            </Button>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;