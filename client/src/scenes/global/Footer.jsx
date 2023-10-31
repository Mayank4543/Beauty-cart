import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { shades } from "../../theme";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  // const {
  //   palette: { neutral },
  // } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" sx={{background:'linear-gradient(to right,#00093c,#2d0b00)',color:'#fff', borderTopLeftRadius:'125px'}}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >   SHOP-CART
          </Typography>
        
          <div>
            Sometime I get road rage just pushing a shopping cart in supermarket
          </div>
         
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care-1800889999
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
          Developer   Contact Us(6398142486)
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
          Email: 
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
         mayankrathore9897@gmail.com
          </Typography>
          <IconButton href="https://www.facebook.com/mayank.rathore.12764874">
     <FacebookIcon  sx={{height:'40px',width:'40px',color:'#000',background:"#fff",borderRadius:'50%',marginRight:'15px'}}/>
     </IconButton>

     <IconButton href="https://instagram.com/mayusic450?igshid=NGExMmI2YTkyZg==">
       <InstagramIcon sx={{ height:'40px',width:'40px',color:'#000',background:"#fff",borderRadius:'50%',marginRight:'15px'}}/>  
       </IconButton> 
        </Box>
      
      </Box>
    </Box>
  );
}

export default Footer;
