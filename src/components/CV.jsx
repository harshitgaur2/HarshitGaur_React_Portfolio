import React from 'react';
import styled from 'styled-components';

const CV = () => {
  const googleDriveLink =
    'https://drive.google.com/uc?export=download&id=1i90ZgADfacG2p0YhLE_0MxtHeSGggNJB';

  return (
    <CVContainer>
      <Heading>Download My CV</Heading>
      <DownloadButton href={googleDriveLink} target="_blank" rel="noopener noreferrer">
        Download CV
      </DownloadButton>
    </CVContainer>
  );
};

export default CV;

// Styled Components
const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color, #333); /* Fallback color if variable is undefined */
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--bg-color, #fff); /* Fallback color if variable is undefined */
  background-color: var(--text-color, #333); /* Fallback color */
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--text-secondary-color, #555); /* Fallback color */
  }
`;
