import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export const connectIcons = [
  {
    id: 1,
    icon: <FaFacebook className="icon" />,
    style: { height: "24px", width: "24px", color: "#1877F2" },
    url: "https://web.facebook.com/retinkmedia",
  },
  {
    id: 2,
    icon: <FaTwitter className="icon" />,
    style: { height: "24px", width: "24px", color: " #1DA1F2" },
    url: "https://twitter.com/RetinkMedia",
  },
  {
    id: 3,
    icon: <FaInstagram className="icon" />,
    style: {
      height: "24px",
      width: "24px",
      color:
        " radial-gradient(97.43% 115.89% at 20.67% 120.21%, #EACC7B 7.3%, #ECAA59 18.4%, #EF802E 30.7%, #EF6D3A 35.8%, #F04B50 46%, #F03E58 51.6%, #DB359E 68.9%, #CE37A4 72.4%, #AC3CB4 78.9%, #7544CF 87.7%, #2B4FF2 98%)",
    },
    url: "https://www.instagram.com/retinkmedia",
  },
  {
    id: 4,
    icon: <FaLinkedin className="icon" />,
    style: { height: "24px", width: "24px", color: "#0A66C2" },
    url: "https://www.linkedin.com/company/retink/",
  },
  {
    id: 5,
    icon: <FaYoutube className="icon" />,
    style: { height: "24px", width: "24px", color: "#1877F2" },
    url: "https://www.youtube.com/channel/UCU8_MUvy4BLWqReEb-eEA4A",
  },
  {
    id: 6,
    icon: <FaPinterest className="icon" />,
    style: { height: "24px", width: "24px", color: "#E60019" },
    url: "https://www.pinterest.com/retinkmedia/",
  },
];
