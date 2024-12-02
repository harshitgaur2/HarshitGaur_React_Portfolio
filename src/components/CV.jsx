import React from 'react';
import styled from 'styled-components';

const CV = () => {
  const googleDrivePreviewLink =
    'https://drive.google.com/file/d/1i90ZgADfacG2p0YhLE_0MxtHeSGggNJB/preview'; // Google Drive Preview URL
  const googleDriveDownloadLink =
    'https://drive.google.com/uc?export=download&id=1i90ZgADfacG2p0YhLE_0MxtHeSGggNJB'; // Google Drive Download URL

  return (
    <CVContainer>
      <Heading>My CV</Heading>
      <CVPreview>
        <iframe
          src={googleDrivePreviewLink}
          width="100%"
          height="600px"
          title="CV Preview"
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </CVPreview>
      <DownloadButton
        href={googleDriveDownloadLink}
        target="_blank"
        rel="noopener noreferrer"
      >
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
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color, #333); /* Fallback color if variable is undefined */
  text-align: center;
`;

const CVPreview = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  iframe {
    border-radius: 8px;
  }
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
