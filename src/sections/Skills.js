import React from 'react';
import { Box, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Skill from '../components/Skill';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '45vh']}
      width={['100vw', '100vw']}
      invertX
    />
    <Triangle
      color="backgroundDark"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />
    <Triangle
      color="primaryLight"
      height={['30vh', '35vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Skills = () => (
  <Section.Container id="skills" Background={Background}>
    <Section.Header name="Skills" label="skill" />
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          contentfulAbout {
            skills {
              name
              id
              logo {
                fixed(height: 100, width: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { skills } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Fade right>
              <Box>
                {skills.map(skill => (
                  <Skill
                    key={skill.id}
                    name={skill.name}
                    logo={skill.logo.fixed.src}
                  />
                ))}
              </Box>
            </Fade>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default Skills;
