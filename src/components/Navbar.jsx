import { Stack } from "@mui/material"
import { Link } from "react-router-dom"

import { logo} from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => {

    return(
        
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top:0, justifyContent: 'space-between', marginLeft:'10px' }}>

        <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
             
            <img src={logo} alt="logo" height={45} />

            <h1 style={{color: 'white', paddingLeft:'10px'}}>AME-MEDIA</h1>
            

        </Link>
        <SearchBar/>

    </Stack>
   
)
  }
export default Navbar