import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ modal, setModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {modal && (
        <motion.div
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            zIndex: "2",
            background: "#0A66C2",
          }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden">
          <motion.div
            style={{
              maxWidth: "400px",
              margin: "0 auto",
              padding: "40px 20px",
              background: "white",
              borderRadius: "10px",
              textAlign: "center",
            }}
            variants={modalVariants}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Go to Home</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
