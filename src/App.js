import styled from "styled-components";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import OurOffers from "./components/OurOffers";
import SignupSection from "./components/SignupSection";
import VideoPreview from "./components/VideoPreview";

function App() {
  return (
    <HomePage>
      <HeaderSection />
      <VideoPreview />
      <Benefits />
      <div className="mid-parag-1">
        {" "}
        <p className="heading">Transform your Creation Process</p>
        <p className="parag">
          With a new approach toordering content, you can now stop juggling
          multiple documents and meetings and start publishing content faster
          and on demand
        </p>
      </div>
      <div className="mid-parag-2">
        {" "}
        <p className="heading">
          Activate your business growth with RetinkContent.
        </p>
        <p className="parag">
          Save time and maintain your brand identity within your budget range or
          sign up for affordable plans and still access multiple content
          services like:
        </p>
      </div>
      <OurOffers />
      <SignupSection />
      <FooterSection />
      <Footer />
    </HomePage>
  );
}

export default App;

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .mid-parag-1 {
    height: 126px;
    width: 795px;
    margin-top: 28px;
    margin-bottom: 26px;
    padding: 16px;

    .heading {
      color: #7e1cfe;
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
      letter-spacing: 0em;
      margin-top: 16px;
      text-align: center;
    }
    .parag {
      height: 68px;
      width: 795px;
      left: 323px;
      top: 2356px;
      color: #4d4d4d;
      font-size: 20px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
  .mid-parag-2 {
    height: 126px;
    width: 795px;
    margin-top: 26px;
    margin-bottom: 26px;
    .heading {
      color: #7e1cfe;
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: center;
    }
    .parag {
      height: 68px;
      width: 795px;
      left: 323px;
      top: 2356px;
      color: #4d4d4d;
      font-size: 20px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
`;
