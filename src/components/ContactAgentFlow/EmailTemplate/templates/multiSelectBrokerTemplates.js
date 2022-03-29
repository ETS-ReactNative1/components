import { AccountTypes, ContactAgentContexts, ListingTypes } from '../const';

const common = {
  accountType: AccountTypes.Broker,
  contactAgentContext: ContactAgentContexts.MultiSelect,
  listingTypes: ListingTypes.SalesAndRentals
};

const PotentialBuyer = {
  ...common,
  templateName: 'Potential Buyer',
  subject: () => `Buyer for your listing`,
  message: () => `Hi, I may have a buyer for your listing. When are you available to discuss?`
};

const SetupACall = {
  ...common,
  templateName: 'Setup a Call',
  subject: () => `Call about your listing`,
  message: () =>
    `Hi, I'd like to discuss this listing. What is the best time and number to reach you?`
};

const RequestATour = {
  ...common,
  templateName: 'Request a Tour',
  subject: () => `Listing tour`,
  message: () =>
    `Hi, I'm interested in bringing my client to see this listing. What is your availability?`
};

const OpenHouse = {
  ...common,
  templateName: 'Open House',
  subject: () => `Open house for your listing`,
  message: () =>
    `Hi,  I'd like to bring my client to the upcoming open house for this listing. Can you register us?`
};

const multiSelectBrokerTemplates = [PotentialBuyer, SetupACall, RequestATour, OpenHouse];

export { multiSelectBrokerTemplates };
