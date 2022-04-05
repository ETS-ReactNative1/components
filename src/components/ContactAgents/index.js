import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Panel from '../Panel';
import { AgentsGroup } from './AgentsGroup';
import { Container } from './styled-components';

const sellerAgents = [
  {
    id: 1,
    agent_image:
      'https://s3-alpha-sig.figma.com/img/ba88/14ab/6577a1bce0ca90e992cda4a0196def99?Expires=1649030400&Signature=bWWVW4af~fsvh5rS1~Ye7nrqF6SSInIl3jKo3YmEUw~f4la5OpOliWFgGsYN2bGlkQ2soY-WsC6UQQPHQiqBi0aAqAIwdnJj8JESYAR3-38bWvE027ROb~C024jOGwNPzwtiI1LhgYCZ-SBAK9n~HEDdFaAQHjdMVKAuh48bvwMsuiX-X3Yi3IKD4MLUM7Vv6cYAzYafmWlG6j1ySfU1YZBMSB1jVBnSSYZEVJNH4TF2AT-rZTgadZTEv4lF9dd24ZqckxbRw2yjsgUnyKUa965B0JyiLKTtOlADgTMoi6LfouQRJW0BjG~lQ~Jp3hRCqfb9aReo8bKGAQwKpVdn6A__&Key-Pair-Id=APKAINTVSUGEWH5XD',
    display_name: 'Keith Arthur',
    brokerage_display_name: 'Gotham Brokerage Co., Inc.',
    phone: '(718) 344-9142',
    email: 'keith.arthur@perchwell.com'
  }
];

const buyerAgents = [
  {
    id: 2,
    agent_image:
      'https://s3-alpha-sig.figma.com/img/ba88/14ab/6577a1bce0ca90e992cda4a0196def99?Expires=1649030400&Signature=bWWVW4af~fsvh5rS1~Ye7nrqF6SSInIl3jKo3YmEUw~f4la5OpOliWFgGsYN2bGlkQ2soY-WsC6UQQPHQiqBi0aAqAIwdnJj8JESYAR3-38bWvE027ROb~C024jOGwNPzwtiI1LhgYCZ-SBAK9n~HEDdFaAQHjdMVKAuh48bvwMsuiX-X3Yi3IKD4MLUM7Vv6cYAzYafmWlG6j1ySfU1YZBMSB1jVBnSSYZEVJNH4TF2AT-rZTgadZTEv4lF9dd24ZqckxbRw2yjsgUnyKUa965B0JyiLKTtOlADgTMoi6LfouQRJW0BjG~lQ~Jp3hRCqfb9aReo8bKGAQwKpVdn6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    display_name: 'Kristin Watson',
    brokerage_display_name: 'Spire Group Inc.',
    phone: '(718) 344-9142',
    email: 'kristin.watson@perchwell.com'
  },
  {
    id: 3,
    agent_image:
      'https://s3-alpha-sig.figma.com/img/5499/503b/d48279db8d3a89daa64e0d5cb70cb1dd?Expires=1649635200&Signature=Y5hatFEe2nRFwrQc1C1s3m0eUDWjEGooxUo3-lqRp5SWakvmzw8ZkfC1E6m56aG4nVa-9AnRobImxMY~8a02F0PU2TLXhMzPRs69ve15l9e-VbY5gbkO37d07VFd4GSrE3k8fFbsnJzkqRSnN6r6tdHgCSCVNNq1M6ALvcRI344aiXm6f~8MhELu7qTgHMwmZtGPc4-PM-odIcoalQ0C165WJsBsbcSf5i2Y3xCPpafcS1BSTnu4byRyXSUI6XOPjZGzUlyYTK-18b~u1xG4wsnggZHjJVENHChyGltxe7pKlC51yUJc0I0l~lRPiPl2Hf8atX98YYZ7e4o4zytHkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    display_name: 'Bessie Cooper',
    brokerage_display_name: 'Spire Group Inc.',
    phone: '(718) 344-9142',
    email: 'kristin.watson@perchwell.com'
  },
  {
    id: 4,
    agent_image:
      'https://s3-alpha-sig.figma.com/img/ba88/14ab/6577a1bce0ca90e992cda4a0196def99?Expires=1649030400&Signature=bWWVW4af~fsvh5rS1~Ye7nrqF6SSInIl3jKo3YmEUw~f4la5OpOliWFgGsYN2bGlkQ2soY-WsC6UQQPHQiqBi0aAqAIwdnJj8JESYAR3-38bWvE027ROb~C024jOGwNPzwtiI1LhgYCZ-SBAK9n~HEDdFaAQHjdMVKAuh48bvwMsuiX-X3Yi3IKD4MLUM7Vv6cYAzYafmWlG6j1ySfU1YZBMSB1jVBnSSYZEVJNH4TF2AT-rZTgadZTEv4lF9dd24ZqckxbRw2yjsgUnyKUa965B0JyiLKTtOlADgTMoi6LfouQRJW0BjG~lQ~Jp3hRCqfb9aReo8bKGAQwKpVdn6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    display_name: 'Kathryn Murphy',
    brokerage_display_name: 'Spire Group Inc.',
    phone: '(718) 344-9142',
    email: 'kristin.watson@perchwell.com'
  }
];

const ContactAgents = ({ listing }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { agents, buyers_agents } = listing;

  const { listing_url = null } = listing;

  const hasListingUrl = !!listing_url;

  return (
    <Panel panelTitle="Agents">
      <Container isMobile={isMobile}>
        <AgentsGroup
          title="Sellers"
          subheaderText="If you represented the seller in this transaction"
          contactButtonText="Contact Listing Agent"
          agents={agents}
          brokerageLink={
            hasListingUrl ? { url: listing_url, text: 'Listing on Brokerage Website' } : null
          }
          listing={listing}
        />
        <AgentsGroup
          title="Buyer"
          subheaderText="If you also represented the buyer in this transaction"
          contactButtonText="Contact Buyer Reps"
          agents={buyers_agents}
          listing={listing}
        />
      </Container>
    </Panel>
  );
};

export default ContactAgents;
