import React from 'react';
import styled from 'styled-components';

const WorkHistory = () => {
  const jobs = [
    { title: 'Data Science and Analytics Associate', company: 'Publicis Sapient', duration: '2022- Present', description: 'Contributed to different AI&ML accelerated projects across different clients spanning from different verticles like FMCG, Automobile, Energy and Commodities. Provided actionalbe insights and performance analytics using Adobe Analytics. Leveraged Adobe Target and Adobe RTCDP for personalisation. Used PowerBI and Tableau to curate reports and dashboards. Created LLMs and used SQL and Python for advanced data processing.' },
    { title: 'Data Science Intern', company: 'Ezapp Solutions US', duration: '2021 - 2022', description: 'Worked on various data analysis projects. Implemented time series forecasting, flipping models and created data pipelines for house prediction agencies in regions across the USA.' },
  ];

  return (
    <Section>
      <Heading>Work History</Heading>
      <JobList>
        {jobs.map((job, index) => (
          <Job key={index}>
            <JobTitle>{job.title}</JobTitle>
            <Company>{job.company}</Company>
            <Duration>{job.duration}</Duration>
            <Description>{job.description}</Description>
          </Job>
        ))}
      </JobList>
    </Section>
  );
};

export default WorkHistory;

const Section = styled.section`
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Job = styled.div`
  background-color: var(--bg-secondary-color);
  padding: 1rem;
  border-radius: 8px;
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
`;

const Company = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary-color);
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary-color);
`;
