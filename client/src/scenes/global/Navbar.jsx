import { useDispatch, useSelector} from "react-redux";
import { Badge, Box, IconButton,Typography,Menu, MenuItem} from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import { Avatar } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,

  
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import './Navbar.css'


function Navbar() {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen= (event) => {
    setAnchorEl(event.currentTarget);
    

  };

  const handleMenuClose= () => {
    setAnchorEl(null);
    
  };
  const handleMenuOpen1 = (event) => {
    // setAnchorEl(event.currentTarget);
    setMenuAnchorEl(event.currentTarget);

  };

  const handleMenuClose1 = () => {
    // setAnchorEl(null);
    setMenuAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="#34495e"
      color="#2c3e50"
      position= "fixed"
      top="0"
      left="0"
      zIndex="1"
     
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box 
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[900]}
        >
         BeautyCart.in
        
        </Box>
       
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          {/* <IconButton sx={{ color: "white" }}> */}
          {/* <input className="header__searchinput" type="text" /> */}
          {/* <InputLabel className="header__searchinput" type ="text" /> */}
            {/* <SearchOutlined className="header_searchIcon "/> */}
          {/* </IconButton> */}
       
       
        <Typography variant="h6"  color={shades.secondary[900]} sx={{
        '&:hover': {
            cursor: 'pointer'
        }
    }}  onClick={() => navigate("/")}>
         Home
        </Typography>
       
        <Typography variant="h6"  color={shades.secondary[900]}  sx={{
        '&:hover': {
            cursor: 'pointer'
        }
    }} onClick={()=>navigate("/contact")}>
           contact
        </Typography>
        {/* <Typography   color={shades.secondary[900]}>
        {
         isAuthenticated && <p color="secondary">{user.name}</p>
                 }
             </Typography> */}
             <Typography variant="h6"  color={shades.secondary[900]}>
             {isAuthenticated ?(

    <Button variant ="contained" color="success" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  
     
  ):(
    
     
    
     <Button variant ="contained" color="success" onClick={() => loginWithRedirect()}>Log In</Button>
    
  )}
                  </Typography>
  
    
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "white" }}
            >
              <ShoppingBagOutlined className="bag" />
            </IconButton>
          </Badge>

       
          <IconButton sx={{ color: "white" }}>
        
      {isAuthenticated ? (
                <>
                <Avatar
                  alt={user.name}
                  src={user.picture}
                  onClick={handleMenuOpen1}
                />
                <Menu
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose1}
                >
                  <MenuItem onClick={handleMenuClose1}>{user.name}</MenuItem>
                </Menu>
              </>
      
      ) : (
        <PersonOutline />
      )}
     
         </IconButton>
    
      <Box
   
      
      >
      <IconButton sx={{ color: "white"}} onClick={handleMenuOpen}>
        <MenuOutlined />
      </IconButton>
      <Menu
       
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
    
      >
        <MenuItem onClick={handleMenuClose}> <Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}>About</MenuItem>
        <MenuItem onClick={handleMenuClose}>Service</MenuItem>
        <MenuItem onClick={handleMenuClose}> <Link to="/contact">Contact</Link></MenuItem>
      </Menu>
      

        </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
