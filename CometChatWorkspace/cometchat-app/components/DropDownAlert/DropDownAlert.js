import React, {memo, useEffect, useRef, useState} from 'react';

import Alert from '../../cometchat-pro-react-native-ui-kit/src/components/Shared/DropDownAlert';

const DropDownAlert = ({type, message}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  useEffect(() => {
    if (open && message && ref.current) {
      ref.current.showMessage(type, message);
    }
  }, [open, type, message]);

  return <Alert ref={ref} onClose={handleClose} />;
};

export default memo(DropDownAlert);
