import React, { useMemo, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { colorByName } from '../helpers';
import { Container, RectangleLabel, Round } from './styled-components';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

const Transit = ({ transit }) => {
  const classes = useStyles();

  const mappedSection = useMemo(() => {
    const result = [];
    if (transit) {
      const keys = Object.keys(transit);
      if (keys.length > 0) {
        keys.forEach((key) => {
          let obj = {};
          if (key === 'mta') {
            obj.section = 'MTA - Subway';
            obj.items = transit[key].map((element) => {
              return {
                miles: `${element.distance} MI`,
                name: element.station_name,
                rounds: element.routes.map((route) => ({ color: colorByName(route), value: route }))
              };
            });
            result.push(obj);
          }
          if (key === 'jitney') {
            obj.section = 'Hampton Jitney';
            obj.items = transit[key].map((element) => {
              return {
                miles: `${element.distance} MI`,
                name: element.station_name,
                rounds: element.routes.map((route) => ({ color: '#A7A9AC', value: route }))
              };
            });
            result.push(obj);
          }
          if (key === 'lirr') {
            obj.section = 'MTA - Long Island Railroad';
            obj.items = transit[key].map((element) => {
              return {
                miles: `${element.distance} MI`,
                name: element.station_name,
                rounds: element.routes.map((route) => ({ color: colorByName(route), value: route }))
              };
            });
            result.push(obj);
          }
          if (key === 'metro_north') {
            obj.section = 'MTA - Metro North';
            obj.items = transit[key].map((element) => {
              return {
                miles: `${element.distance} MI`,
                name: element.station_name,
                rounds: element.routes.map((route) => ({ color: colorByName(route), value: route }))
              };
            });
            result.push(obj);
          }
        });
      }
    }

    return result;
  }, []);

  if (!transit) {
    return null;
  }

  return (
    <Grid item xs={12} sm={6}>
      <Container>
        {mappedSection.map((detail, index) => (
          <Fragment key={index}>
            <p className={classes.subTitle} style={{ marginTop: index !== 0 ? 24 : 0 }}>
              {detail.section}
            </p>
            {detail.items.map((info, rowIndex) => (
              <div
                key={info.name}
                className={`${classes.rowItem} ${
                  rowIndex === detail.items.length - 1 ? classes.rowLastItem : ''
                } `}
              >
                <div className={classes.lineWrapper}>
                  <p className={classes.columnItem}>{info.miles}</p>
                  <p className={classes.columnItemBold}>{info.name}</p>
                </div>
                <div className={classes.roundWrapper}>
                  {info.rounds.map((round, i) => (
                    <Fragment key={i}>
                      {index === 0 ? (
                        <Round color={round.color}>{round.value}</Round>
                      ) : (
                        <RectangleLabel color={round.color}>{round.value}</RectangleLabel>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </Container>
    </Grid>
  );
};

Transit.propTypes = {
  transit: PropTypes.shape({
    distance: PropTypes.number,
    station_name: PropTypes.string,
    routes: PropTypes.array
  })
};

export { Transit };
