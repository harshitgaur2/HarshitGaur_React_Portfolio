import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const researchPapers = [
  {
    title: "Optifake: optical flow extraction for deepfake detection using ensemble learning technique",
    authors: "Srishti Vashishtha, Harshit Gaur, Uttirna Das",
    description:
      "The objective of this work is to develop an ensemble deep learning-based system that can differentiate between fake and real images. With the use of the recommended optical flow technique, a novel approach is proposed that extracts the apparent motion of image pixels which gives more accurate results compared to other state-of-the-art. FaceForensics +  + dataset is used to test the extraction algorithms and ensemble model which fetched an accuracy of 86.02% for the DeepFake subset and 85.7% for the FaceSwap subset of the dataset. To the best knowledge, no one has completely used the ensemble model- OptiFake on the optical flow derived frames, highlighting a research gap in the field of deepfake detection.",
    year: 2024,
    journalLink: "https://link.springer.com/article/10.1007/s11042-024-18641-x",
  },
  {
    title: "A fuzzy rule‐based system with decision tree for breast cancer detection",
    authors: "Vedika Gupta, Harshit Gaur, Srishti Vashishtha",
    description:
      "A novel approach for early age breast cancer detection using decision tree algorithm is applied the creating a novel set of 27 fuzzy rules which are fed into FRBS. The investigation is performed on the publicly available Wisconsin Breast Cancer Dataset. The accuracy obtained by the proposed system is about 97%, recall is 99.58% and precision is about 93%. The experiments on this dataset yield higher performance as compared to the state-of-the-art dataset.",
    year: 2023,
    journalLink: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/ipr2.12774",
  },
  {
    title: "Interpretation the Influence of Hydrometeorological Variables on Soil Temperature Prediction Using the Potential of Deep Learning Model",
    authors: "Mohd. Hamdy Eid Salah Elsayed, Harshit Gaur",
    description:
      "This paper aims to analyses the contrastive approach to predict the ST of a certain region with the help of different machine learning models, including Random Forest (RF), Support Vector, Neural Network (NN), Linear Regression (LR) and Long Short-Term Memory Network (LSTM). The modelling outcomes revealed that LSTM model attained the lowest root mean square error (RMSE = 3.3255) decreased the average prediction error by 6% with regards to NN (RMSE = 3.4796), SVM (RMSE = 3.5766), and RF (RMSE = 3.8128), and improved the prediction accuracy of LR by 15%. The model is in compliance with the latest machine learning industry standards and allows low-cost experimental performances on low powered edge computing devices.",
    year: 2023,
    journalLink: "https://kbes.journals.publicknowledgeproject.org/index.php/kbes/article/view/7529",
  },
];

const Research = () => {
  return (
    <Section>
      <Heading>Research Papers</Heading>
      <PaperList>
        {researchPapers.map((paper, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PaperCard>
              <PaperTitle>{paper.title}</PaperTitle>
              <Authors>{paper.authors}</Authors>
              <Description>{paper.description}</Description>
              <Year>Published: {paper.year}</Year>
              <JournalLink href={paper.journalLink} target="_blank">
                Read More
              </JournalLink>
            </PaperCard>
          </motion.div>
        ))}
      </PaperList>
    </Section>
  );
};

export default Research;

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

const PaperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const PaperCard = styled.div`
  background-color: var(--bg-secondary-color);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const PaperTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary-color);
`;

const Authors = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text-secondary-color);
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--text-secondary-color);
`;

const Year = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: var(--text-secondary-color);
`;

const JournalLink = styled.a`
  font-size: 1rem;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
