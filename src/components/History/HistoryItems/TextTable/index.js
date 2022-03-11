import React, { Fragment } from "react";
import {
  Container,
  ListingTextContainer,
  Text,
  DateText,
  ItemContainer,
  Divider,
  ListingChangeContainer,
  Row,
  PriceText,
  PriceAndChangeContainer,
  Title,
  TitleContainer,
  LinkContainer,
  Link,
  Dot,
} from "./styled-components";
import { format } from "date-fns";
import { ChangeLabel } from "./ChangeLabel";
import { ExternalLinkIcon } from "./icons";
import { useMediaQuery, useTheme } from "@material-ui/core";
import TimeLineDot from "./TimeLineDot";

function formatDate(time) {
  return format(new Date(time), "M-dd-yy");
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TextTable = ({ data = [], listingsIds = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const c = { isMobile };

  const renderRightColumn = (j, activity) => {
    const hasLinks = !!activity.links.length;
    const url = !hasLinks ? "" : activity.links[0].url;
    const linkText = !hasLinks ? "" : activity.links[0].link_text;
    return (
      <ListingChangeContainer key={`j-${j}`} {...c}>
        <TitleContainer>
          <Title>{activity.title}</Title>

          {hasLinks && (
            <Fragment>
              <Dot>&nbsp;•&nbsp;</Dot>
              <LinkContainer href={url} target="_blank">
                <Link>{linkText}</Link>
                <ExternalLinkIcon />
              </LinkContainer>
            </Fragment>
          )}
        </TitleContainer>

        <PriceAndChangeContainer {...c}>
          <PriceText {...c}>{`$${numberWithCommas(activity.price)}`}</PriceText>

          <ChangeLabel
            {...c}
            change={activity.pct_change}
            text={activity.pct_change_text}
          />
        </PriceAndChangeContainer>
      </ListingChangeContainer>
    );
  };

  return (
    <React.Fragment>
      <Container>
        {data.map((item, i) => (
          <ItemContainer key={`i-${i}`}>
            {item.activity.map((activity, j) => {
              const text = j === 0 ? item.listings[0].text : "";

              const isLastActivity =
                j === item.activity.length - 1 && i === data.length - 1;

              return (
                <Row {...c}>
                  <ListingTextContainer key={`i-${i}-j-${j}`} {...c}>
                    {!isMobile && (
                      <Text {...c} href={activity.listing_id} target="_blank">
                        {text}
                      </Text>
                    )}
                    <DateText>{formatDate(activity.time)}</DateText>
                  </ListingTextContainer>
                  <TimeLineDot
                    currentListingsIds={listingsIds}
                    terminus={activity.terminus}
                    listingId={activity.listing_id}
                    id={`dot-${i}-${j}`}
                    isLast={isLastActivity}
                  />
                  {renderRightColumn(j, activity)}
                </Row>
              );
            })}

            {i < data.length - 1 && <Divider {...c} />}
          </ItemContainer>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default TextTable;
