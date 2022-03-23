import React from "react";
import Panel from "../Panel";
import { AgentsGroup } from "./AgentsGroup";
import { Container } from "./styled-components";

const sellerAgents = [
  {
    id: 1,
    agent_image:
      "https://s3-alpha-sig.figma.com/img/ba88/14ab/6577a1bce0ca90e992cda4a0196def99?Expires=1649030400&Signature=bWWVW4af~fsvh5rS1~Ye7nrqF6SSInIl3jKo3YmEUw~f4la5OpOliWFgGsYN2bGlkQ2soY-WsC6UQQPHQiqBi0aAqAIwdnJj8JESYAR3-38bWvE027ROb~C024jOGwNPzwtiI1LhgYCZ-SBAK9n~HEDdFaAQHjdMVKAuh48bvwMsuiX-X3Yi3IKD4MLUM7Vv6cYAzYafmWlG6j1ySfU1YZBMSB1jVBnSSYZEVJNH4TF2AT-rZTgadZTEv4lF9dd24ZqckxbRw2yjsgUnyKUa965B0JyiLKTtOlADgTMoi6LfouQRJW0BjG~lQ~Jp3hRCqfb9aReo8bKGAQwKpVdn6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    display_name: "Keith Arthur",
    brokerage_display_name: "Gotham Brokerage Co., Inc.",
    phone: "(718) 344-9142",
    email: "keith.arthur@perchwell.com",
  },
];

const buyerAgents = [
  {
    id: 2,
    agent_image:
      "https://s3-alpha-sig.figma.com/img/ba88/14ab/6577a1bce0ca90e992cda4a0196def99?Expires=1649030400&Signature=bWWVW4af~fsvh5rS1~Ye7nrqF6SSInIl3jKo3YmEUw~f4la5OpOliWFgGsYN2bGlkQ2soY-WsC6UQQPHQiqBi0aAqAIwdnJj8JESYAR3-38bWvE027ROb~C024jOGwNPzwtiI1LhgYCZ-SBAK9n~HEDdFaAQHjdMVKAuh48bvwMsuiX-X3Yi3IKD4MLUM7Vv6cYAzYafmWlG6j1ySfU1YZBMSB1jVBnSSYZEVJNH4TF2AT-rZTgadZTEv4lF9dd24ZqckxbRw2yjsgUnyKUa965B0JyiLKTtOlADgTMoi6LfouQRJW0BjG~lQ~Jp3hRCqfb9aReo8bKGAQwKpVdn6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    display_name: "Kristin Watson",
    brokerage_display_name: "Spire Group Inc.",
    phone: "(718) 344-9142",
    email: "kristin.watson@perchwell.com",
  },
  {
    id: 3,
    agent_image:
      "https://s3-alpha-sig.figma.com/img/ba88/14ab/6577a1bce0ca90e992cda4a0196def99?Expires=1649030400&Signature=bWWVW4af~fsvh5rS1~Ye7nrqF6SSInIl3jKo3YmEUw~f4la5OpOliWFgGsYN2bGlkQ2soY-WsC6UQQPHQiqBi0aAqAIwdnJj8JESYAR3-38bWvE027ROb~C024jOGwNPzwtiI1LhgYCZ-SBAK9n~HEDdFaAQHjdMVKAuh48bvwMsuiX-X3Yi3IKD4MLUM7Vv6cYAzYafmWlG6j1ySfU1YZBMSB1jVBnSSYZEVJNH4TF2AT-rZTgadZTEv4lF9dd24ZqckxbRw2yjsgUnyKUa965B0JyiLKTtOlADgTMoi6LfouQRJW0BjG~lQ~Jp3hRCqfb9aReo8bKGAQwKpVdn6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    display_name: "Kristin Watson",
    brokerage_display_name: "Spire Group Inc.",
    phone: "(718) 344-9142",
    email: "kristin.watson@perchwell.com",
  },
  {
    id: 4,
    agent_image:
      "https://s3-alpha-sig.figma.com/img/ba88/14ab/6577a1bce0ca90e992cda4a0196def99?Expires=1649030400&Signature=bWWVW4af~fsvh5rS1~Ye7nrqF6SSInIl3jKo3YmEUw~f4la5OpOliWFgGsYN2bGlkQ2soY-WsC6UQQPHQiqBi0aAqAIwdnJj8JESYAR3-38bWvE027ROb~C024jOGwNPzwtiI1LhgYCZ-SBAK9n~HEDdFaAQHjdMVKAuh48bvwMsuiX-X3Yi3IKD4MLUM7Vv6cYAzYafmWlG6j1ySfU1YZBMSB1jVBnSSYZEVJNH4TF2AT-rZTgadZTEv4lF9dd24ZqckxbRw2yjsgUnyKUa965B0JyiLKTtOlADgTMoi6LfouQRJW0BjG~lQ~Jp3hRCqfb9aReo8bKGAQwKpVdn6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    display_name: "Kristin Watson",
    brokerage_display_name: "Spire Group Inc.",
    phone: "(718) 344-9142",
    email: "kristin.watson@perchwell.com",
  },
];

const ContactAgents = () => {
  return (
    <Panel panelTitle="Contact Agents">
      <Container>
        <AgentsGroup
          title="Listing Side"
          subheaderText="If you represented the seller in this transaction"
          contactButtonText="Contact Listing Agent"
          agents={sellerAgents}
        />
        <AgentsGroup
          title="Buyer Representation"
          subheaderText="If you also represented the buyer in this transaction"
          contactButtonText="Contact Buyer Reps"
          agents={buyerAgents}
        />
      </Container>
    </Panel>
  );
};

export default ContactAgents;
