import React, { useEffect, useCallback } from "react";
import clsx from "clsx";
import Types from "prop-types";
import {
  Typography,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from "@material-ui/core";

import useStyles from "./styles";

/**
 * @typedef ActionItem
 * @property {string} label
 * @property {React.ReactElement} icon
 * @property {() => void} onClick
 * @property {boolean} [isRed]
 */

/** @type React.FC<{buttonRef: React.RefObject; items: ActionItem[]; placement: (import('@material-ui/core').PopperPlacementType)}> */
const ActionsMenu = ({ buttonRef, items, placement }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const onToggle = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = () => {
    setOpen(false);
  };

  const handleClick = (action) => () => {
    closeMenu();
    action();
  };

  useEffect(() => {
    let ref = buttonRef.current;
    if (ref) {
      ref.addEventListener("click", onToggle);
      return () => ref.removeEventListener("click", onToggle);
    }
  }, [buttonRef, onToggle]);

  return (
    <Popper
      open={isOpen}
      anchorEl={buttonRef.current}
      placement={placement}
      transition
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper className={classes.root} elevation={4}>
            <ClickAwayListener onClickAway={closeMenu}>
              <MenuList autoFocusItem={isOpen}>
                {items.map((item, i) => (
                  <MenuItem
                    key={i}
                    className={clsx(
                      classes.item,
                      item.isRed && classes.itemRed
                    )}
                    onClick={handleClick(item.onClick)}
                  >
                    <span className={classes.iconCont}>{item.icon}</span>
                    <Typography className={classes.itemText}>
                      {item.label}
                    </Typography>
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
ActionsMenu.propTypes = {
  buttonRef: Types.any,
  placement: Types.string,
  items: Types.array,
};

export default ActionsMenu;
