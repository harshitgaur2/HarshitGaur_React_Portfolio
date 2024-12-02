import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  const projects = [
    {
      title: 'Project A',
      description: 'Description of project A',
      image: '/path/to/projectAimage.jpg',
      link: 'https://link-to-project-a.com',
    },
    {
      title: 'Project B',
      description: 'Description of project B',
      image: '/path/to/projectBimage.jpg',
      link: 'https://link-to-project-b.com',
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
  padding: 0.5rem 1rem;
  background-color: var(--cta-color);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  text-transform: uppercase;

  &:hover {
    background-color: var(--cta-hover-color);
  }
`;

