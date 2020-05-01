import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';



const FAQS = [
  {
    title: 'What is a hackathon?',
    content: () => (
      <>
        Hackathon is an intense brainstorming marathon where people with different skills get together, exchange ideas, form teams around the best ideas and develop working prototypes over the course of 7 days. The brainstorming sessions are well structured, and the teams are helped throughout by world-class mentors.
      </>
    ),
  },
  {
    title: 'When does the hackathon take place?',
    content: () => (
      <>
        The hackathon will take place on 10-17 April. It is 5 to 7 pm everyday over a course of a week to collaborate and build a solution within the tracks. 
      </>
    ),
  },
  {
    title: 'Are there any prerequisites for participation?',
    content: () => (
      <>
        We’re looking for students from every corner of India. Anyone with a passion to drive educational resilience through their ideas is welcome.
      </>
    ),
  },
  {
    title: 'How many can participate?',
    content: () => (
      <>
        We have a limit of 60 students in total.
      </>
    ),
  },
  
  
 
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>FAQ</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
