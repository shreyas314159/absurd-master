import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is a hackathon?',
    content: () => (
      <>
        Hackathon is an intense brainstorming marathon where people with different skills get together, exchange ideas, form teams around the best ideas and develop working prototypes over the course of 48 hours. The brainstorming sessions are well structured, and the teams are helped throughout the weekend by world-class mentors.
      </>
    ),
  },
  {
    title: 'When does the hackathon take place?',
    content: () => (
      <>
        The hackathon will take place on 9-12 April. You have 48 hours to collaborate and build a solution within the tracks. We’ll start with a kick-off session on 9April (Time: 13.00 UTC) and end the hackathon on Sunday, 12 April (Time: TBA) with the announcement of the results.
      </>
    ),
  },
  {
    title: 'Are there any prerequisites for participation?',
    content: () => (
      <>
        We’re looking for brilliant people from every corner of the globe. Field experts, scientists, tech enthusiasts, business leaders, project managers, marketers, designers & innovators, are all welcomed to join. The key attribute here is “motivation to act”. 
      </>
    ),
  },
  {
    title: 'How many can participate?',
    content: () => (
      <>
        There is no limit to the number of participants. The more the merrier
      </>
    ),
  },
  {
    title: 'Where can I submit my challenge?',
    content: () => (
      <>
        If you don’t have a team yet to solve a challenge - join Slack, recruit team members and then submit your team alongside the challenge for review in Devpost(linked on our landing page) If you are a Government organization or Sponsor company - submit your challenge here. Each challenge sponsor is allowed to submit only one challenge. 
      </>
    ),
  },
  {
    title: 'Can I submit already existing projects?',
    content: () => (
      <>
       Yes, please! During the past few weeks, we’ve seen an impressive number of initiatives to develop digital solutions and infrastructure to face the coronavirus crisis and do urge you for further development of these projects.  We have immense respect for your work, so please feel free to submit your existing challenge and the team working to improve it, like every other team. We expect that you continue developing your solution further during the hackathon. Phrase your challenges and emphasize how you will scale it or improve it. 
      </>
    ),
  },
  {
    title: 'Why do I need this hackathon?',
    content: () => (
      <>
          In the upcoming weeks, months and perhaps even years we will have to face a great number of challenges during and in the aftermath of the viral pandemic. Our resilience is being tested. Health systems, transportation, logistics, mobility services, food security, governmental services are jeopardized. We face millions of challenges, today, tomorrow and many months from now.   Our society is blessed with an abundance of creativity and entrepreneurial spirit. We can use the best of this to maintain and create a sustainable and resilient future. If we take action together, we can do what is needed. 
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
