import React, { useMemo } from 'react';
import { AgentCell } from '../AgentCell';
import { ModalSection } from './../ModalSection';
import { ErrorMessage } from './styled-components';
import PropTypes from 'prop-types';

function sortAgentsById(data) {
  const agents = data.sort((a, b) => a.id - b.id);
  return agents;
}

const Recipients = ({ agents, agentsSelected, setAgentsSelected }) => {
  const showCheckbox = useMemo(() => agents.length > 1, [agents]);
  const agentIds = useMemo(() => agentsSelected.map((agent) => agent.id), [agentsSelected]);

  const hasAgentsSelected = useMemo(() => agentsSelected.length > 0, [agentsSelected]);

  return (
    <ModalSection title="Recipients" titleColor={hasAgentsSelected ? '#606060' : '#ea6656'}>
      <ErrorMessage>
        {!hasAgentsSelected ? (
          'You must select at least one agent to contact buyer representives'
        ) : (
          <span>&nbsp;</span>
        )}
      </ErrorMessage>
      {agents.map((agent) => {
        const isChecked = agentIds.includes(agent.id);
        return (
          <AgentCell
            key={agent.id}
            agent={agent}
            showCheckbox={showCheckbox}
            checked={isChecked}
            onClickCheck={() => {
              if (isChecked) {
                setAgentsSelected((agents) =>
                  sortAgentsById(agents.filter((agentSelected) => agentSelected.id !== agent.id))
                );
              } else {
                setAgentsSelected((agents) => sortAgentsById([...agents, agent]));
              }
            }}
          />
        );
      })}
    </ModalSection>
  );
};

Recipients.propTypes = {
  agents: PropTypes.arrayOf(PropTypes.object).isRequired,
  agentsSelected: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAgentsSelected: PropTypes.func.isRequired
};

export { Recipients };
