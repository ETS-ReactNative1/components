import { AccountTypes, ContactAgentContexts, ListingTypes } from './../const';

const common = {
  accountType: AccountTypes.Broker,
  contactAgentContext: ContactAgentContexts.ListingDetail,
  listingTypes: ListingTypes.SalesAndRentals
};

const PotentialBuyer = {
  ...common,
  templateName: 'Potential Buyer',
  subject: ({ listing }) => `Buyer for ${listing.address_with_unit_hashed}`,
  message: ({ listing, agent }) =>
    `Hi ${agent.first_name || agent.display_name}, I may have a buyer for ${
      listing.address_with_unit_hashed
    }. When are you available to discuss?`
};

const SetupACall = {
  ...common,
  templateName: '',
  subject: ({ listing }) => `Call about ${listing.address_with_unit_hashed}`,
  message: ({ listing, agent }) =>
    `Hi ${agent.first_name || agent.display_name}, I'd like to discuss ${
      listing.address_with_unit_hashed
    }. What is the best time and number to reach you?`
};

const RequestATour = {
  ...common,
  templateName: 'Request a Tour',
  subject: () => `Tour {listing.address_with_unit_hashed}`,
  message: ({ listing, agent }) =>
    `Hi ${agent.first_name || agent.display_name}, I'd like to discuss ${
      listing.address_with_unit_hashed
    }. What is the best time and number to reach you?`
};

const listingDetailBrokerTemplates = [PotentialBuyer, SetupACall, RequestATour];

export { listingDetailBrokerTemplates };
