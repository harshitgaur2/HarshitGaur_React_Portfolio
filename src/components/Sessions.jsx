import React from 'react';
import styled from 'styled-components';
import session1pic from '../assets/session1pic.png';
import session2pic from '../assets/session2pic.png';
import session3pic from '../assets/session3pic.png';
import session4pic from '../assets/session4pic.png';
import session5pic from '../assets/session5pic.png';
import session6pic from '../assets/session6pic.png';
import session7pic from '../assets/session7pic.png';
import session8pic from '../assets/bvpsession.png';

const session1_desc = 'The Google Cloud Facilitator Session on May 12 at Bharati Vidyapeeths College of Engineering, New Delhi, focused on industry-ready cloud skills, including DevOps, Machine Learning, and App Deployment. Harshit Gaur led both keynotes: an introduction to the Google Cloud Facilitator Program with hands-on labs and an expert talk on applications of Google Cloud and OpenCV. Harshit Gaur, a Google Cloud Facilitator, showcased his expertise by presenting all topics in the session.'
const session2_desc = 'Invited as the judge and mentor for the elite IEEE WIE Hackathon 5.0. Judged over 15 teams from different themses. Conducted a QnA for the students and executed reviews in all nt rounds.'
const session3_desc = 'Harshit Gaur delivered an engaging session on Introduction to Data Science at Kasturi Ram College of Higher Studies, covering foundational and advanced concepts in the field. The session included an overview of key data preprocessing techniques, exploratory data analysis (EDA), and an introduction to popular machine learning algorithms such as Linear Regression, Decision Trees, and Random Forests. He talked about Neural Networks, emphasizing their real-world applications. Students gained a comprehensive understanding of the field and actionable strategies to build their careers.'
const session4_desc = 'Harshit Gaur conducted an expert session for students at Galgotias University, Noida, tailored to their academic focus. For BBA students, the session introduced the fundamentals of Machine Learning and Deep Learning, with simplified explanations of key algorithms like Linear Regression, Clustering, and Neural Networks, alongside practical applications in business scenarios.For MBA students, Harshit delivered an advanced session on Business and Data Analytics with Python, focusing on leveraging Python for data-driven decision-making. The session covered tools like Pandas, NumPy, and Matplotlib, along with predictive analytics techniques to interpret market trends and optimize business strategies. These sessions empowered students with actionable insights into the role of AI and analytics in transforming business landscapes.'
const session5_desc = 'Harshit Gaur was invited as a panelist for a discussion on the topic of Multi-Generational Workforce in Modern Offices at Publicis Sapient, Gurgaon. During the event, Harshit emphasized the critical importance of effective communication between newer generations and baby boomers, especially in the AI and Data Industry.He highlighted how bridging generational gaps can foster innovation, improve team collaboration, and ensure knowledge transfer in rapidly evolving tech domains. Harshit also shared insights into leveraging diverse experiences to solve complex problems and encouraged open dialogues to create a balanced and inclusive workplace culture that drives success in the data-driven era.'
const session6_desc = 'Harshit Gaur was selected to represent his innovative idea at the Publicis Sapient Summit 2023, held in Bangalore and sponsored by Marriott Bonvoy. He showcased a cutting-edge solution to combat food hunger in India using Generative AI and intelligent distributive systems. Harshit developed a platform leveraging indexed databases and a neural recommendation engine to optimize food distribution and minimize waste. His approach combined advanced AI technologies with real-world impact, addressing a critical social issue. The idea received widespread appreciation from attendees for its innovation, scalability, and potential to bring meaningful change.'
const session7_desc = 'Harshit Gaur was invited by Facebook India to deliver an expert talk on Voice User Interfaces (VUI). During the session, he provided an in-depth explanation of various VUI frameworks such as RASA, Dialogflow, and Amazon Lex, detailing how they enable the creation of intelligent voice-based applications. He covered essential concepts in VUI design, including intent recognition, dialogue management, and natural language processing (NLP), while emphasizing the importance of a seamless user experience. Harshit also discussed the challenges in designing for voice, such as contextual understanding and multi-turn conversations, and how AI models like speech recognition and text-to-speech play a key role in VUI interactions. The session helped attendees understand how VUIs are revolutionizing industries, from customer service to smart devices, and provided valuable insights into the future of voice technology.'
const session8_desc = 'Harshit Gaur was invited by BVPIEEE to deliver an informative session on Getting Started with Machine Learning and the importance of learning ML in todays tech-driven world. He showcased several demo projects, demonstrating the practical application of ML algorithms. He explained the role of data preprocessing, feature engineering, and model tuning in building effective ML models. The session highlighted the career opportunities in data science and artificial intelligence, encouraging students to explore ML as a fundamental skill for future technological advancements. The session emphasized how hands-on projects are key to mastering the subject.'
const Sessions = () => {
  const sessions = [
    { title: 'Google Cloud Facilitator Study Jam 2022 @BVP Delhi', date: '2022-05-12', description: session1_desc, image: session1pic },
    { title: 'Judge / Mentor at IEEE WIE HACK 4.0 @BVP Delhi', date: '2024-05-22', description: session2_desc, image: session2pic },
    {title: 'Expert Session on Introduction to Data Science @Kasturi Ram College, Narela', date: '2024-10-16', description: session3_desc, image: session3pic },
    {title: 'Expert Session on ML & DL with Python @Galgotias Univ. Noida', date: '2024-11-24', description: session4_desc, image: session4pic },
    {title: 'Multi-Generation Key Panel Talk @Publicis Sapient', date: '2024-04-12', description: session5_desc, image: session5pic },
    {title: 'Booth Presenter @PS Summit 2023 (Publicis Sapient)', date: '2023-10-03', description: session6_desc, image: session6pic },
    {title: 'Voice User Interfaces Expert Talk @Facebook', date: '2022-02-25', description: session7_desc, image: session7pic },
    {title: 'Getting Started With Machine Learning @BVPIEEE', date: '2023-06-13', description: session8_desc, image: session8pic },
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
