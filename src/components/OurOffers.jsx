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
            borderRadius: "20px",
            boxSizing: "border-box",
            boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, 0.3)",
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
  display: grid;
  margin-top: 26px;
  padding: 28px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  column-gap: 36px;
  row-gap: 56px;
`;
