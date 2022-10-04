import styled from "styled-components";
import { useForm } from "react-hook-form";

const SignupSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <SignupDiv>
      <div className="title-div">
        <p className="title"> Sign Up For The BETA to see more</p>
      </div>
      <div className="form-div">
        <form className="form-grp" onSubmit={handleSubmit()}>
          <input
            className="input"
            {...register("businessName", {
              required: true,
              minLength: {
                value: 2,
                message: "Name should be more than 2 characters",
              },
            })}
            placeholder="Business Name"
          />
          {errors.firstName
            ? errors.firstName.type === "minLength"
              ? errors.firstName.message
              : "Business name is required"
            : ""}
          <input
            className="input"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9.z_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            placeholder=" Email"
          />
          {errors.email
            ? errors.email.type === "pattern"
              ? "Email is not valid"
              : "Email is required"
            : ""}
        </form>{" "}
        <button className="notify-btn" type="submit">
          Notify me
        </button>
        <p className="freelance">
          <a href="/">Sign up as a freelance partner</a>
        </p>
      </div>
    </SignupDiv>
  );
};
export default SignupSection;

const SignupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  margin-top: 28px;

  .title {
    color: #7e1cfe;
    height: 41px;
    width: 401px;
    font-size: 24px;
    font-weight: 600;
    line-height: 41px;
    text-align: left;
  }

  .form-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px;
  }

  .form-grp {
    display: flex;

    > input {
      height: 58px;
      width: 288px;
      border-radius: 20px;
      margin: 7px;
      border: 1px solid #754de8;
      outline: none;
      font-family: Poppins;
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
