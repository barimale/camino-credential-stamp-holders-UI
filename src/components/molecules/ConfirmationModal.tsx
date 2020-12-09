import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal as InnerModal, Button } from '@material-ui/core';

function getModalStyle() {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
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

export interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
    isShown: boolean;
    hide: () => void;
}

export const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (props: ConfirmationModalProps) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const { isShown, message, hide } = props;

    const modal = (
        <InnerModal
        open={isShown}
        onClose={hide}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
            <div style={modalStyle} className={classes.paper}>
                <h3>{message}</h3>
                <span style={{display: 'flex', flexDirection: 'row', padding: '16px'}}>
                    <Button onClick={hide} style={{alignSelf: 'left'}}>Yes</Button>
                    <Button onClick={hide} style={{alignSelf: 'right'}}>No</Button>
                </span>
            </div>
      </InnerModal>
    );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};