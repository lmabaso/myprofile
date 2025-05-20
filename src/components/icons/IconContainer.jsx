import React from 'react';
import PropTypes from 'prop-types';

import {
  AboutIcon,
  EducationIcon,
  SkillsIcon,
  ExperienceIcon,
  PortfolioIcon,
  AchievementIcon,
  DeveloperIcon,
  CodeSandoxIcon,
  ChessIcon,
  GamingIcon,
  MoonIcon,
  SunIcon,
  UnavailableIcon
} from "./";


const iconMap = {
  About: AboutIcon,
  Education: EducationIcon,
  Skills: SkillsIcon,
  Experience: ExperienceIcon,
  Portfolio: PortfolioIcon,
  Achievements: AchievementIcon,
  Moon: MoonIcon,
  Sun: SunIcon,
  Developer: DeveloperIcon,
  CodeSandox: CodeSandoxIcon,
  Chess: ChessIcon,
  Gaming: GamingIcon
};

const IconContainer = ({ name , className }) => {
  const IconComponent = iconMap[name] || UnavailableIcon;
  return <IconComponent className={`${className}`}/>;
};

IconContainer.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default IconContainer;
