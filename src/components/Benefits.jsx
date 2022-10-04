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
      ))}
    </BenefitsDiv>
  );
};
export default Benefits;

const BenefitsDiv = styled.div`
  display: grid;
  margin-top: 26px;
  padding: 28px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  column-gap: 36px;
  row-gap: 56px;
`;
