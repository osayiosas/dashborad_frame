import { CssBaseline, GlobalStyles } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import {router} from "./routes";

const App = () => {

  const globaStyles = {
    a: {
      color: "unset",
      textDecoration: "non",
    },
  };
  return (


   <>
   <CssBaseline />
   <GlobalStyles styles={globaStyles} />
   <RouterProvider router={router} />
   </>
  )
}

export default App