import React, { useRef } from "react";
import { AgentDetail } from "../AgentDetail";
import { Container, Row, AvatarImage, AgentName } from "./styled-components";
import { IconButton } from "@material-ui/core";
import { EllipsisIcon, PhoneIcon, MailIcon } from "./icons";
import ActionsMenu from "../../ActionsMenu";

const AgentRow = ({ agent, ...rest }) => {
  const {
    agent_image = null,
    display_name = null,
    brokerage_display_name = null,
    phone = null,
    email = null,
  } = agent;

  const buttonRef = useRef(null);

  if (
    !agent_image ||
    !display_name ||
    !brokerage_display_name ||
    !phone ||
    !email
  ) {
    return null;
  }

  const menuOptions = [
    {
      label: "Call",
      icon: <PhoneIcon />,
      onClick: () => {
        window.open(`tel:${phone}`);
      },
    },
    {
      label: "Email",
      icon: <MailIcon />,
      onClick: () => {
        window.open(`mailto:${email}`);
      },
    },
  ];

  return (
    <Container {...rest}>
      <Row>
        <AvatarImage src={agent_image} />
        <AgentName>{display_name}</AgentName>
        <AgentDetail icon={"briefcase"} text={brokerage_display_name} />
        <AgentDetail icon={"phone"} text={phone} />
        <AgentDetail icon={"email"} text={email} />
        <IconButton ref={buttonRef}>
          <EllipsisIcon />
        </IconButton>
        <ActionsMenu
          items={menuOptions}
          buttonRef={buttonRef}
          placement="bottom-end"
        />
      </Row>
    </Container>
  );
};

export { AgentRow };
