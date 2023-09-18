import { FC, useState } from 'react'
import './App.css'

import Button from '@mui/material/Button';
import ReactSuspense from '@components/ReactSuspense'

interface PropsTypes {
  setShow: (show: boolean) => void
}

const ShowButton: FC<PropsTypes> = ({ setShow }) => (
  <Button
    variant="outlined"
    onClick={() => setShow(true)}
  >
    Show
  </Button>
)

const HideButton: FC<PropsTypes> = ({ setShow }) => (
  <Button
    variant="outlined"
    onClick={() => setShow(false)}
  >
    Hide
  </Button>
)

const App: FC = () => {

  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      {!show ? 
      <ShowButton setShow={setShow} /> :
      <>
        <HideButton setShow={setShow} />
        <ReactSuspense />
      </>
    }
    </>
  )
}

export default App
