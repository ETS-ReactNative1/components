import React from "react";
import PropTypes from "prop-types";
import { Container, Title, IconContainer } from "./styled-components";
import {
  DoormanIcon,
  ElevatorIcon,
  GymIcon,
  PetsIcon,
  WasherDryerIcon,
} from "./icons";

const MapIcons = {
  Elevator: <ElevatorIcon />,
  Doorman: <DoormanIcon />,
  "Washer/dryer": <WasherDryerIcon />,
  Gym: <GymIcon />,
  Pets: <PetsIcon />,
};

const Element = ({ title, isMobile }) => {
  const common = { isMobile };
  const icon = MapIcons[title];
  return (
    <Container {...common}>
      <IconContainer {...common}>{icon}</IconContainer>
      <Title {...common}>{title}</Title>
    </Container>
  );
};

Element.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export { Element };
