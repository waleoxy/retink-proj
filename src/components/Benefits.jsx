import styled from "styled-components";
import { benefits } from "../contexts/benefits";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

const buttonVariant = {
  hover: {
    scale: 1.005,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(0,0,255)",
    transition: {
      duration: 0.3,
    },
  },
};

const Benefits = () => {
  return (
    <BenefitsDiv>
      {benefits.map((benefit) => (
        <div className="card">
          <motion.Card
            variants={buttonVariant}
            whileHover="hover"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "386px",
              width: "361px",
              padding: "36px",
              margin: "26px",
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
              </Card.Title>
              <Card.Text>{benefit.text}</Card.Text>
            </Card.Body>
          </motion.Card>
        </div>
      ))}
    </BenefitsDiv>
  );
};
export default Benefits;

const BenefitsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 66px;
  padding: 28px;
`;
