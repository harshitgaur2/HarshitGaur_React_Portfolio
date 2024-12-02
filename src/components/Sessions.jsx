import React from 'react';
import styled from 'styled-components';
import session1pic from '/Users/harshitgaur/Desktop/harshitgaur/src/assets/session1pic.png';
import session2pic from '/Users/harshitgaur/Desktop/harshitgaur/src/assets/session2pic.png';
import session3pic from '/Users/harshitgaur/Desktop/harshitgaur/src/assets/session3pic.png';
import session4pic from '/Users/harshitgaur/Desktop/harshitgaur/src/assets/session4pic.png';
import session5pic from '/Users/harshitgaur/Desktop/harshitgaur/src/assets/session5pic.png';

const session1_desc = 'Google Cloud Facilitator Session happened on the 12th of May at Bharati Vidyapeeths College of Engineering, New Delhi. Google Cloud Facilitator program is organised to train students on industry-ready cloud skills and other IT skills like DevOps, Machine Learning, App Deployment, etc.Two keynotes were conducted in the session:Keynote 1:  Introduction to Google Cloud Facilitator Program and hands-on labs on CloudSkillBoost | Harshit GaurKeynote 2: Expert Talk on applications of Google Cloud and OpenCV. Computer Vision on Demand using Google Cloud | Dr. Srishti VashishthaDr. Srishti Vashishtha and Harshit Gaur are Google Cloud Facilitators for BVP Delhi Campus for the 2022 program. They are experts in Google Cloud and have been trained to teach other students.'

const Sessions = () => {
  const sessions = [
    { title: 'Google Cloud Facilitator Study Jam 2022 @BVP Delhi', date: '2022-06-04', description: session1_desc, image: session1pic },
    { title: 'Judge / Mentor at IEEE WIE HACK 4.0 @BVP Delhi', date: '2023-02-20', description: 'Advanced Machine Learning', image: session2pic },
    {title: 'Expert Session on Introduction to Data Science @Kasturi Ram College, Narela', date: '2023-02-20', description: 'Advanced Machine Learning', image: session3pic },
    {title: 'Expert Session on ML & DL with Python @Galgotias Univ. Noida', date: '2023-02-20', description: 'Advanced Machine Learning', image: session4pic },
    {title: 'Multi-Generation Key Panel Talk @Publicis Sapient', date: '2023-02-20', description: 'Advanced Machine Learning', image: session5pic },
    {title: 'Expert Session on ML & DL with Python @Galgotias Univ. Noida', date: '2023-02-20', description: 'Advanced Machine Learning', image: session5pic },
  ];

  return (
    <Section>
      <Heading>Sessions</Heading>
      <SessionList>
        {sessions.map((session, index) => (
          <Session key={index}>
            <SessionContent>
              <SessionText>
                <SessionTitle>{session.title}</SessionTitle>
                <Date>{session.date}</Date>
                <Description>{session.description}</Description>
              </SessionText>
              <SessionThumbnail>
                <img src={session.image} alt={`${session.title} thumbnail`} />
              </SessionThumbnail>
            </SessionContent>
          </Session>
        ))}
      </SessionList>
    </Section>
  );
};

export default Sessions;

// Styled Components
const Section = styled.section`
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SessionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Session = styled.div`
  background-color: var(--bg-secondary-color);
  padding: 1rem;
  border-radius: 8px;
  display: flex; /* Use flexbox to arrange content side by side */
  gap: 1rem;
`;

const SessionContent = styled.div`
  display: flex; /* Default display for larger screens */
  justify-content: space-between; /* Ensures the text and image are aligned correctly */
  width: 100%;

  /* Apply media query for smaller screens */
  @media (max-width: 768px) {
    display: block; /* Stack text and image vertically on small screens */
  }
`;

const SessionText = styled.div`
  flex: 1; /* Takes the remaining space */
  text-align: left;
`;

const SessionTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: left;
  line-height: 1.6;
  margin-left: 0;
  margin-right: 0;
  max-width: 600px;
  color: var(--text-secondary-color);
`;

const SessionThumbnail = styled.div`
  max-width: 600px; /* Adjust the thumbnail size */
  img {
    width: 100%;
    height: auto;
    border-radius: 8px; /* Optional: adds rounded corners */
  }
`;
