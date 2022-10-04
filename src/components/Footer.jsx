import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      {" "}
      <p className="copyrt-text">
        copyright &copy;
        {new Date().getFullYear()} {""}Retink
      </p>
      <div className="rt-div">
        <p>Privacy Policy</p>
        <p style={{}}>Terms of Service</p>
      </div>
    </FooterDiv>
  );
};
export default Footer;

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 118px;
  width: 100%;
  background: #000000;

  .copyrt-text {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    height: 22px;
    width: 226px;
  }

  .rt-div {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #ffffff;
    }
  }
`;
