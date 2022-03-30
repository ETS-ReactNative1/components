import { ContactAgentContexts, AccountTypes, ListingTypes } from './const';
import {
  listingDetailClientTemplates,
  listingDetailBrokerTemplates,
  multiSelectBrokerTemplates,
  multiSelectClientTemplates
} from './templates';

function filterTemplateByListingType(template, listingType) {
  return (
    template.listingTypes === listingType || template.listingTypes === ListingTypes.SalesAndRentals
  );
}

function getEmailTemplates(context, accountType, listingType) {
  let templates = [];
  if (context === ContactAgentContexts.ListingDetail) {
    if (accountType === AccountTypes.Client) {
      templates = listingDetailClientTemplates;
    } else if (accountType === AccountTypes.Broker) {
      templates = listingDetailBrokerTemplates;
    }
  } else if (context === ContactAgentContexts.MultiSelect) {
    if (accountType === AccountTypes.Client) {
      templates = multiSelectClientTemplates;
    } else if (accountType === AccountTypes.Broker) {
      templates = multiSelectBrokerTemplates;
    }
  }

  return templates.filter((template) => filterTemplateByListingType(template, listingType));
}

export { getEmailTemplates };
