import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { default as ReactModal } from 'react-modal';

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: 'rgb(255, 255, 255)',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
    border: 'none',
    overflow: 'auto',
    outline: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(51, 51, 51, 0.75)',
    zIndex: 9999
  }
};

/*
    Available ReactModal props:
    isOpen                      - Boolean describing if the modal should be shown or not.
    onAfterOpen                 - Function that will be run after the modal has opened.
    onAfterClose                - Function that will be run after the modal has closed.
    onRequestClose              - Function that will be run when the modal is requested to be closed 
                                  (either by clicking on overlay or pressing ESC).
                                  Note: It is not called if isOpen is changed by other means.
    closeTimeoutMS              - Number indicating the milliseconds to wait before closing the modal.
    style                       - Object indicating styles to be used for the modal. It has two keys, `overlay` and `content`.
    contentLabel                - String indicating how the content container should be announced to screenreaders
    portalClassName             - String className to be applied to the portal.
    overlayClassName            - String className to be applied to the overlay.
    id                          - String id to be applied to the content div.
    className                   - String className to be applied to the modal content.
    bodyOpenClassName           - String className to be applied to the document.body (must be a constant string). 
                                  This attribute when set as `null` doesn't add any class to document.body.
    htmlOpenClassName           - String className to be applied to the document.html (must be a constant string). 
                                  This attribute is `null` by default.
    ariaHideApp                 - Boolean indicating if the appElement should be hidden
    shouldFocusAfterRender      - Boolean indicating if the modal should be focused after render.
    shouldCloseOnOverlayClick   - Boolean indicating if the overlay should close the modal
    shouldCloseOnEsc            - Boolean indicating if pressing the esc key should close the modal. 
                                  Note: By disabling the esc key from closing the modal you may introduce an accessibility issue.
    shouldReturnFocusAfterClose - Boolean indicating if the modal should restore focus to the element that had focus prior to its display.
    role                        - String indicating the role of the modal, allowing the 'dialog' role to be applied if desired. 
                                  This attribute is `dialog` by default.
    parentSelector              - Function that will be called to get the parent element that the modal will be attached to.
    aria                        - Additional aria attributes (optional).
    data                        - Additional data attributes (optional).
    overlayRef                  - Overlay ref callback.
    contentRef                  - Content ref callback. 
*/

const Modal = ({ style, ...otherProps }) => {
  const modalStyle = useMemo(() => {
    const { content, overlay } = style;

    return {
      content: {
        ...customStyles.content,
        ...content
      },
      overlay: {
        ...customStyles.overlay,
        ...overlay
      }
    };
  }, [style]);

  return <ReactModal style={modalStyle} contentLabel="Modal" ariaHideApp={false} {...otherProps} />;
};

Modal.propTypes = {
  style: PropTypes.object
};

Modal.defaultProps = {
  style: {}
};

export default Modal;
export { default as ModalTitle } from './Title';
