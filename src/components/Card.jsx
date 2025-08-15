import React from 'react';
import PropTypes from 'prop-types';
import IconContainer from '../components/icons/IconContainer';
import Interests from "./cards/Interests";
import EducationBackground from "./cards/EducationBackground";

const CARD_COMPONENTS = {
  interests: Interests,
  EducationBackground: EducationBackground
};

const Card = ({ cardType, ...props }) => {
  const Component = CARD_COMPONENTS[cardType];

  if (!Component) return null;
  return <Component {...props} />
}

Card.propTypes = {
  cardType: PropTypes.oneOf(Object.keys(CARD_COMPONENTS)).isRequired,
  image: PropTypes.string,
  Head: PropTypes.string,
  description: PropTypes.string,
  institute: PropTypes.string,
  course: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  desc: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default Card
