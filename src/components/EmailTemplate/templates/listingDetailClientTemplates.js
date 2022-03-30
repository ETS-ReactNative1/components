import { AccountTypes, ContactAgentContexts, ListingTypes } from '../const';

const common = {
  accountType: AccountTypes.Client,
  contactAgentContext: ContactAgentContexts.ListingDetail
};

const RequestATour = {
  ...common,
  listingTypes: ListingTypes.SalesAndRentals,
  templateName: 'Request a Tour',
  subject: ({ listing }) => `Tour ${listing.address_with_unit_hashed}`,
  message: ({ agent, listing, user }) =>
    `Hi ${agent.first_name || agent.display_name}, I'd like to visit ${
      listing.address_with_unit_hashed
    }. Please contact me at ${user.phone || user.email}. Thanks!`
};

const VideoTour = {
  ...common,
  listingTypes: ListingTypes.SalesAndRentals,
  templateName: 'Video Tour',
  subject: ({ listing }) => `${listing.address_with_unit_hashed} video tour`,
  message: ({ listing, agent }) =>
    `Hi ${agent.first_name || agent.display_name}, I'd like a video tour for ${
      listing.address_with_unit_hashed
    }. What is your availability?`
};

const FinancingAndMortgageInfo = {
  ...common,
  listingTypes: ListingTypes.Sales,
  templateName: 'Financing and Mortgage Info',
  subject: ({ listing }) => `Financing for ${listing.address_with_unit_hashed}`,
  message: ({ listing, agent }) =>
    `Hi ${agent.first_name || agent.display_name}, I have some questions about ${
      listing.address_with_unit_hashed
    } financing. What is the best way to connect?`
};

const Availability = {
  ...common,
  listingTypes: ListingTypes.Rentals,
  templateName: 'Availability',
  subject: ({ listing }) => `${listing.address_with_unit_hashed} availability`,
  message: ({ listing, agent }) =>
    `Hi ${agent.first_name || agent.display_name}, Is ${
      listing.address_with_unit_hashed
    } is still available?`
};

const PropertyDetails = {
  ...common,
  listingTypes: ListingTypes.SalesAndRentals,
  templateName: 'Property Details',
  subject: ({ listing }) => `${listing.address_with_unit_hashed}`,
  message: ({ listing, agent }) =>
    `Hi ${agent.first_name || agent.display_name}, I'm interested in ${
      listing.address_with_unit_hashed
    }.`
};

const SearchAdvice = {
  ...common,
  listingTypes: ListingTypes.SalesAndRentals,
  templateName: 'Search Advice',
  subject: () => `Search advice`,
  message: ({ agent, user }) =>
    `Hi ${
      agent.first_name || agent.display_name
    }, I'd like some advice on my home search. Please contact me at ${user.phone || user.email}.`
};

const listingDetailClientTemplates = [
  RequestATour,
  VideoTour,
  FinancingAndMortgageInfo,
  Availability,
  PropertyDetails,
  SearchAdvice
];

export { listingDetailClientTemplates };
