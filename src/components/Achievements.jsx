import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import rtcdp from '../assets/rtcdp.png';
import powerbi from '../assets/powerbi.png';
import architect from '../assets/architect.png';
import badge from '../assets/badge.svg';
import databricks from '../assets/databricks.png';

const achievements = [
  {
    title: "Adobe Certified Professional - Adobe Target Business Practitioner",
    image: rtcdp,
    link: "https://www.credly.com/badges/e2b3e84b-0360-447d-82e5-9812385a4f32/public_url",
  },
  {
    title: "Adobe Certified Professional - Adobe Analytics Developer",
    image: rtcdp,
    link: "https://www.credly.com/badges/3bf27e91-e4f6-4be1-be4b-03333cbffdc5",
  },
  {
    title: "Adobe Certified Professional - Adobe Target Business Practitioner",
    image: rtcdp,
    link: "https://www.credly.com/badges/e2b3e84b-0360-447d-82e5-9812385a4f32",
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    image: powerbi,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/harshitgaur/7E4BAFFACDE685D?sharingId=D3F39DD5EB7AB104",
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    image: architect,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/harshitgaur/1CEA9AC4E1D0E9E7?sharingId=D3F39DD5EB7AB104",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    image: badge,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/harshitgaur/590965ADF61B94EA?sharingId=D3F39DD5EB7AB104",
  },
  {
    title: "Databricks Associate Data Engineer Certified",
    image: databricks,
    link: "https://credentials.databricks.com/0c9aa8a8-3da7-4fd4-aef6-0fc77dabe543?record_view=true#gs.h0sc23",
  },
];

const Achievements = () => {
  return (
    <Section>
      <Heading>Achievements</Heading>
      <CardList>
        {achievements.map((achievement, index) => (
          <CardWrapper
            key={index}
            whileHover={{
              scale: 1.05,
              rotateX: 10,
              rotateY: 10,
            }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <ImageWrapper>
                <Image src={achievement.image} alt={achievement.title} />
              </ImageWrapper>
              <CardTitle>{achievement.title}</CardTitle>
              <CTA href={achievement.link} target="_blank" rel="noopener noreferrer">
                View
              </CTA>
            </Card>
          </CardWrapper>
        ))}
      </CardList>
    </Section>
  );
};

export default Achievements;

// Styled Components
const Section = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary-color);
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const CardWrapper = styled(motion.div)`
  flex: 1 1 calc(33.33% - 1rem);
  max-width: 300px;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 1rem);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

const Card = styled.div`
  background-color: var(--bg-secondary-color);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 200px;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-primary-color);
`;

const CTA = styled.a`
  font-size: 1rem;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
