import React from 'react';
import PropTypes from 'prop-types';
import AboutIcon from "./AboutIcon";
import EducationIcon from "./EducationIcon";
import UnavailableIcon from "./UnavailableIcon";
import SkillsIcon from './SkillsIcon';
import ExperienceIcon from './ExperienceIcon';
import PortfolioIcon from './PortfolioIcon';
import AchievementIcon from './AchievementIcon';
import MoonIcon from './MoonIcon';
import CodeSandoxIcon from "./CodeSandoxIcon";
import DeveloperIcon from "./DeveloperIcon";
import SunIcon from './SunIcon';
import ChessIcon from './ChessIcon';
import GamingIcon from './GamingIcon';


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
