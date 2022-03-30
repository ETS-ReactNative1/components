import { AccountTypes, ContactAgentContexts, ListingTypes } from '../const';

const common = {
  accountType: AccountTypes.Client,
  contactAgentContext: ContactAgentContexts.MultiSelect
};

const RequestATour = {
  ...common,
  listingTypes: ListingTypes.SalesAndRentals,
  templateName: 'Request a Tour',
  subject: () => `Listing tour`,
  message: ({ user }) =>
    `Hi, I'd like to tour your listing. Please contact me at ${user.phone || user.email}. Thanks!`
};

const VideoTour = {
  ...common,
  listingTypes: ListingTypes.SalesAndRentals,
  templateName: 'Video Tour',
  subject: () => `Listing video tour`,
  message: () => `Hi, I'd like a video tour of your listing. What is your availability?`
};

const FinancingAndMortgageInfo = {
  ...common,
  listingTypes: ListingTypes.Sales,
  templateName: 'Financing and Mortgage Info',
  subject: () => `Financing for your listing`,
  message: () =>
    `Hi, I have some questions about financing for this listing. What is the best way to connect?`
};

const Availability = {
  ...common,
  listingTypes: ListingTypes.Rentals,
  templateName: 'Availability',
  subject: () => `Listing availability`,
  message: () => `Hi, Is this listing is still available?`
};

const PropertyDetails = {
  ...common,
  listingTypes: ListingTypes.SalesAndRentals,
  templateName: 'Property Details',
  subject: () => `Property details for your listing`,
  message: () => `Hi, I'm interested in this listing.`
};

const SearchAdvice = {
  ...common,
  listingTypes: ListingTypes.SalesAndRentals,
  templateName: 'Search Advice',
  subject: () => `Search advice`,
  message: () =>
    `Hi, I'd like some advice on my home search. Please contact me at {user.phone or user.email}.`
};

const multiSelectClientTemplates = [
  RequestATour,
  VideoTour,
  FinancingAndMortgageInfo,
  FinancingAndMortgageInfo,
  Availability,
  PropertyDetails,
  SearchAdvice
];

export { multiSelectClientTemplates };
