import styled from "styled-components";
import avatar from "../assetx/images/Retink-avatar.png";
import Logo from "../assetx/logo";
import { useForm } from "react-hook-form";
import { motion, useCycle } from "framer-motion";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";
import { async } from "@firebase/util";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, 20],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
  animationTwo: {
    y: [0, -50],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
};

const buttonVariants = {
  hover: {
    cursor: "pointer",
    scale: 1.02,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(0,0,255)",
    transition: {
      duration: 0.3,
    },
  },
};

const HeaderSection = () => {
  const [animation, cycle] = useCycle("animationOne", "animationTwo");
  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ businessName, email }) => {
    console.log("b", businessName);
    // createUserWithEmailAndPassword(auth, email)
    //   .then((userData) => {
    //     const user = userData.user;
    //     setUser(user);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };
  console.log(user);
  return (
    <HeaderSecDiv>
      {/* ledt */}
      <div className="section-left">
        <Logo />
        <div className="heading">
          <p className="heading-txt">Get Advanced AI + Expert Created</p>
          <p className="logo-txt">Logo</p>
        </div>
        <div>
          <p className="parag">
            Boost your sales 10x faster with content customized by our unique
            partnership of human creativity and AI optimization
          </p>
        </div>
        <div>
          <p className="title">Sign Up For The BETA!</p>
          <div>
            <form className="form-grp" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input"
                {...register("businessName", {
                  required: true,
                })}
                placeholder="Business Name"
              />
              {errors.businessName ? "Business name is required" : ""}
              <span>would like a beta invite sent to </span>
              <input
                className="input"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9.z_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                placeholder=" @email address"
              />
              {errors.email
                ? errors.email.type === "pattern"
                  ? "Email is not valid"
                  : "Email is required"
                : ""}
              <span>when it’s ready!</span>
            </form>
            <div className="btn-div">
              {" "}
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="notify-btn"
                onClick={onSubmit}>
                Notify me
              </motion.button>
              <p className="freelance">
                <a href="/">Sign up as a freelance partner</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="section-right">
        {" "}
        <motion.img
          onClick={() => cycle()}
          variants={loaderVariants}
          animate={animation}
          src={avatar}
          alt="avatar"
        />
      </div>
    </HeaderSecDiv>
  );
};

export default HeaderSection;

const HeaderSecDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background: #7e1cfe0d;
  align-items: center;
  height: 703.7384643554688px;

  .section-left {
    position: absolute;
    top: 76px;
    left: 86px;
  }
  .parag {
    height: 80px;
    width: 619px;
    left: 124px;
    top: 322px;
    font-size: 20px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
  }
  .section-right {
    position: absolute;
    height: 778px;
    left: 760px;
    top: 0px;
  }
  .heading {
    display: flex;
    justify-content: flexs-start;
    align-items: flex-end;
    margin-top: 82px;
    .heading-txt {
      height: 120px;
      width: 342px;
      font-family: Poppins;
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: 0em;
      text-align: left;
    }
    .logo-txt {
      height: 68px;
      width: auto;
      padding-top: 2px;
      font-size: 45px;
      font-weight: 700;
      line-height: 68px;
      letter-spacing: 0em;
      color: #7e1cfe;
    }
  }
  .title {
    color: #7e1cfe;
    height: 41px;
    width: 401px;
    font-size: 24px;
    font-weight: 600;
    line-height: 41px;
    text-align: left;
  }
  .btn-div {
    display: flex;
    justify-content: content;
    align-items: center;
  }
  .form-grp {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    > input {
      width: 225px;
      margin: 7px;
      border-bottom: 4px solid blue;
      outline: none;
      border-top: transparent;
      border-right: transparent;
      border-left: transparent;
      background: transparent;
      font-size: 20px;
      font-weight: 500;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: center;
      ::placeholder {
        color: #754de880;
        opacity: 1; /* Firefox */
      }
    }
    > span {
      font-family: Poppins;
      font-size: 15px;
      font-weight: 500;
      line-height: 26px;
      height: 26px;
      width: 229px;
    }
  }
  .notify-btn {
    height: 58px;
    width: 223px;
    margin: 26px;
    border-radius: 20px;
    padding: 12px 63px 12px 63px;
    background: #7e1cfe;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    border: none;
  }

  .freelance {
    height: 58px;
    width: 340px;
    border: 2px solid #754de8;
    border-radius: 20px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 34px;
    text-align: center;
    padding-top: 9px;
    > a {
      color: #0085ff;
    }
  }
`;
