import styled from "styled-components";
import Logo from "./Logo";
import { connectIcons } from "../contexts/connectIcon";

const FootSection = () => {
  return (
    <FootSecDiv>
      {/* left */}
      <div className="left-div">
        <div style={{ marginLeft: "50px" }}>
          <Logo />
        </div>

        <div className="table-div">
          <table>
            <tr className="table-row">
              <td>Product by Retink Media UG</td>
              <td>Get Early Acess</td>
            </tr>
            <tr className="table-row">
              <td>Bonn, Germany</td>
              <td>Provide Feedback</td>
            </tr>
          </table>
        </div>
      </div>
      {/* right */}
      <div className="right-div">
        <p>Connect with us</p>
        <div className="link">
          {connectIcons.map((connectIcon) => (
            <a
              style={connectIcon.style}
              href={connectIcon.url}
              key={connectIcon.id}>
              {connectIcon.icon}
            </a>
          ))}
        </div>
      </div>
    </FootSecDiv>
  );
};
export default FootSection;

const FootSecDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 356px;
  width: 100%;
  background: #d0d0d0;

  .left-div {
    height: 356px;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 16px;
  }
  .table-div {
    margin-bottom: 20px;
  }
  .table-row {
    > td {
      width: 338px;
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      text-align: center;
    }
  }

  .right-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 206px;
    width: 264px;
    > p {
      height: 32px;
      width: 196px;
      font-size: 24px;
      margin-left: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0.0046em;
      color: #131313;
    }
  }
  .link {
    height: 26px;
    width: 264px;
    font-size: 18px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
