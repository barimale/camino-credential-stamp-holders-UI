import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal as InnerModal } from '@material-ui/core';

function getModalStyle() {
return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
    };
}
  
const useStyles = makeStyles((theme: Theme) =>
createStyles({
    paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
}),
);

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const modal = (
        <InnerModal
        open={isShown}
        onClose={hide}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
            <div style={modalStyle} className={classes.paper}>
                <h3>{headerText}</h3>
                {modalContent}
            </div>
      </InnerModal>
    );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};