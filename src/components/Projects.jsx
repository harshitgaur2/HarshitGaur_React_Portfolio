import React from 'react';
import styled from 'styled-components';
import shecare from '../assets/project1.png';
import rag from '../assets/rag.png';

const Projects = () => {
  const projects = [
    {
      title: 'SheCares: Early Age Fuzzy Based Expert System for Detection of Breast Cancer',
      description: 'Project developed using Fuzzy Logics to design an expert system for detecting malignancy in the breast cancer sample. GUI developed as a windows installer using python tikinter platform and MATLAB is extended as the inference engine.',
      image: shecare,
      link: 'https://github.com/harshitgaur2/SheCare-Breast-Cancer-Detection-Using-Fuzzy-Logic-Expert-System',
    },
    {
      title: 'Retrieval Augmented Generative (RAG) for custom document QnA usng Chainlit and Weaviate',
      description: 'An implementation of Retrieval Augmented Generation model using Haystack and Weviate for vector embedding and creating the application using chainlit framework. Implemented the chat interface and document storage mechanism.',
      image: rag,
      link: 'https://github.com/harshitgaur2/RAG_LLM_Haystack_Chainlit',
    },
    // More projects can be added here...
  ];

  return (
    <Section>
      <Heading>Projects</Heading>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                Link to Project
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectList>
    </Section>
  );
};

export default Projects;

// Styled Components
const Section = styled.section`
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 card per row on smaller screens */
  }
`;

const ProjectCard = styled.div`
  background-color: var(--bg-secondary-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary-color);
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--cta-color, #3E00DBFF); /* Fallback to blue if variable is undefined */
  color: var(--cta-text-color, #fff); /* Fallback to white if variable is undefined */
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--cta-hover-color, #0056b3); /* Fallback to darker blue */
    color: var(--cta-hover-text-color, #fff); /* Ensure text is visible on hover */
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0); /* Reset transform for active state */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: auto; /* Adjust width for smaller screens */
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;
