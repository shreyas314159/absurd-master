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

        art_media: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "media" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_day0: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "day0" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_day1: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "day1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_day2: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "day2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_day3: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "day3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_day4: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "day4" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_day7: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "day7" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_chalkpiece: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "chalkpiece" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_customers_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
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
                ReImagine India hackathon is an online-hackathon designed to bring children as active participants in rebuilding 
                stronger, better India post-pandemic. </p> < br/> < br/> < br/>
                <p><strong>The best solutions</strong> that emerge from this hackathon would be given
                mentorship support for implementation with our partners.   </p>     
              

              
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid>
          <div>
              <h2>Agenda</h2>
              
            </div>
            <Art>
              <Img fluid={data.art_customers_pot.childImageSharp.fluid} />
            </Art>
            
          </Grid>

          <Grid inverse>
          <Art>
              <Img fluid={data.art_day0.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Day 0</h2>
              <h3>
              <strong>Team Formation</strong>
              </h3>
              <p>
                Join the hack and make new friends who will be fellow changemakers along with you.
              </p>

              
            </div>
           
          </Grid>

          <Grid inverse>
          <Art>
              <Img fluid={data.art_day1.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Day 1</h2>
              <h3><strong>Observe with empathy</strong></h3>
                           
              <p>
                Talk to real people who are involved in the challenge you are trying to solve
              </p>

              
            </div>
            
          </Grid>

          <Grid inverse>
          <Art>
              <Img fluid={data.art_day2.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Day 2</h2>
              <h3><strong>Identify opportunities</strong></h3>
              
              <p>
                Deep dive into the problem to understand the <i>real</i> reason behind the problem
              </p>

              
            </div>
           
          </Grid>

          <Grid inverse>
          <Art>
              <Img fluid={data.art_day3.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Day 3</h2>
              <h3><strong>Imagine and grow</strong></h3>
              
              <p>
               Find solutions that are readily implementable and are bold in nature
              </p>

              
            </div>
           
          </Grid>

          <Grid inverse>
          <Art>
              <Img fluid={data.art_day4.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Day 4+</h2>
              <h3><strong>Take action</strong></h3>
              
              <p>
               Build your prototype that explains your solution to the world along with a solid execution plan
              </p>

              
            </div>
           
          </Grid>

          <Grid inverse>
          <Art>
              <Img fluid={data.art_day7.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Day 7</h2>
              <h3><strong>Share your solution</strong></h3>
              
              <p>
               Final pitch in front of various experts and stakeholders in the field of education
              </p>

              
            </div>
           
          </Grid>

        

          


          <Grid>
          <div>
              <h2>Media Partners</h2>
              <p>Aligning with the UN SDG 2020 Goals, we have UNLEASH and Kids Educational Revolution as our media partners</p> 
              
            </div>
            <Art>
              <Img fluid={data.art_media.childImageSharp.fluid} />
            </Art>
            
          </Grid>

          <Grid>
          <div>
              <h2>Session Mentors</h2> 
              <p>We are partnering with Chalkpiece who will collaborate with us as session mentors</p>             
            </div>
            
            <Art>
              <Img fluid={data.art_chalkpiece.childImageSharp.fluid} />
            </Art>
            
          </Grid>

         <Grid>
          <div>
              <h2>Want to be our knowledge partners?</h2> 
              <p>KPs provide us help with primary data on education related changes that you have witnessed in the communities that you work with. Connect us with stakeholders to understand the ground reality on the current adaptations in education.</p>
              <br/>
              <div className="row">
              
              <div className="8u 12u$(small)">
                            <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                            <input type="hidden" name="bot-field" />
                                
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <br/>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        
                                    </div>
                                    <br/>
                                    <ul className="actions">
                                    <input type="submit" value="Send Message" />
                                </ul>
                                </form>
                                
                            </div>    
                            </div>
            </div>
            
            <Art>
              <Img fluid={data.art_chalkpiece.childImageSharp.fluid} />
            </Art>
            
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
