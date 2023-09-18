import { FC, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

const Test: FC = () => {
  const [open, setOpen] = useState(true);
  
  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div>Test</div>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message="Test displayed"
        transitionDuration={500}
        TransitionComponent={(props) => <Slide {...props} direction='right' />}
      />
    </>

  )
}

export default Test