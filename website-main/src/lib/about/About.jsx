import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutOne } from "../../components/about/AboutOne";
import { BlogOne } from "../../components/blogs/BlogOne";
import styled from "styled-components";
import { motion } from "framer-motion";

// Responsive styled components
const AboutContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1400px;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const SectionDivider = styled(motion.div)`
  height: 1px;
  background: linear-gradient(90deg, transparent, #ddd, transparent);
  margin: 2rem 0;
  width: 100%;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #2c3e50;
  position: relative;
  line-height: 1.3;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;

    &:after {
      width: 50px;
      height: 2px;
      bottom: -8px;
    }
  }
`;

const GradientBackground = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  padding: 3rem 1rem;
  margin-bottom: 3rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    margin-bottom: 2rem;
    border-radius: 8px;
  }
`;

export const About = () => {
  return (
    <Layout
    header={9} footer={1}
    >
      <AboutContainer >
        {/* Hero about section with gradient background */}
        <GradientBackground>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AboutOne />
          </motion.div>
        </GradientBackground>

        <SectionDivider
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Blog section with enhanced title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <SectionTitle
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Latest Insights
          </SectionTitle>
          <BlogOne />
        </motion.div>
      </AboutContainer>
    </Layout>
  );
};