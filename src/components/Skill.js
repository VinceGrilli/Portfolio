import React from 'react';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const Skill = ({ name, logo }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
    />
  </Tooltip>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Skill;
