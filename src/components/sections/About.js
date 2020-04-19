import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Educational overhaul</h2>
              <p>
                It's hard to ignore the elephant in the room 
                (COVID-19) which has left us with a lot more 
                challenges than ever before, particularly in the
                education sector. We have teachers grappling with 
                new ways to adapt and implement their curriculum in a 
                completely digital environment, while students are getting
                adjusted to the study-from-home lifestyle with everything being
                done in front of screens. The need to confront and innovate is now.
              
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Why children?</h2>
              <p>
              From Greta Thunberg to Malala, we have seen young children's ability to transform the world. As more teachers and pedagogy experts gather to have more fruitful dialogues regarding 
                education, it becomes even more important to get promising solutions from the other side 
                of the spectrum, the children themselves.  Through this hackathon, we are confident
                that simple solutions would emerge from the complex, wicked challenges which has currently engulfed the Indian education sector through the lens of children.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>How it works</h2>
              <p>
                Reimagine India hackathon is an online-hackathon designed to bring children as active participants in rebuilding 
                stronger, better India post-pandemic. </p> < br/> < br/> < br/>
                <p><strong>The best solutions</strong> that emerge from this hackathon would be given
                mentorship support for implementation with our partners.   </p>     
              

              
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Agenda</h2>
              <p>
              From Greta Thunberg to Malala, we have seen young children's ability to transform the world. As more teachers and pedagogy experts gather to have more fruitful dialogues regarding 
                education, it becomes even more important to get promising solutions from the other side 
                of the spectrum, the children themselves.  Through this hackathon, we are confident
                that simple solutions would emerge from the complex, wicked challenges which has currently engulfed the Indian education sector through the lens of children.
              </p>
            </div>
          </Grid>
         
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
