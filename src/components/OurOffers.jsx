import styled from "styled-components";
import { ourOffers } from "../contexts/ourOffers";
import Card from "react-bootstrap/Card";

const OurOffers = () => {
  return (
    <OurOffersDiv>
      {ourOffers.map((benefit) => (
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "386px",
            width: "361px",
            padding: "36px",
            margin: "26px",
          }}
          key={benefit.id}>
          <Card.Img style={benefit.style} variant="top" src={benefit.image} />
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "30px",
                textAlign: "left",
              }}>
              {benefit.title}
              <span>
                <hr
                  style={{
                    background: "#754DE8",
                    border: "3px",
                    height: "4px",
                    width: "80px",
                    marginLeft: "0px",
                    marginTop: "0px",
                  }}
                />
              </span>
            </Card.Title>
            <Card.Text>{benefit.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </OurOffersDiv>
  );
};
export default OurOffers;

const OurOffersDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 66px;
  padding: 28px;
`;
