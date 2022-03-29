import React, { useMemo } from 'react';
import { AgentCell } from '../AgentCell';
import { ModalSection } from './../ModalSection';
import { ErrorMessage } from './styled-components';

function sortAgentsById(data) {
  const agents = data.sort((a, b) => a.id - b.id);
  return agents;
}

const Recipients = ({ agents = [], agentsSelected = [], setAgentsSelected }) => {
  const showCheckbox = useMemo(() => agents.length > 1, [agents]);
  const agentIds = useMemo(() => agentsSelected.map((agent) => agent.id), [agentsSelected]);

  const hasAgentsSelected = useMemo(() => agentsSelected.length > 0, [agentsSelected]);

  return (
    <ModalSection title="Recipients" titleColor={hasAgentsSelected ? '#606060' : '#ea6656'}>
      {!hasAgentsSelected && (
        <ErrorMessage>
          You must select at least one agent to contact buyer representives
        </ErrorMessage>
      )}
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

export { Recipients };
