'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Box from '@mui/material/Box';
import Blog from "../../component/LandingPage/Blog";
import TopBar from "../../component/TopBar/TopBar";
import Footer from "../../component/Footer/Footer";
import Stack from '@mui/material/Stack';
import MainFeaturedPost from "component/LandingPage/MainFeaturedPost";
import BookingBlock from "component/Hershelia_BlookingBlock+Map/bookingBlock";
import GoogleMap from "component/Hershelia_BlookingBlock+Map/Map"

const images = [
  {
    src: '/images/Dormitory.jpg',
    alt: 'Dormitory',
  },
  {
    src: '/images/Dormitory.jpg',
    alt: 'Another Image',
  },
  {
    src: '/images/Dormitory.jpg',
    alt: 'Dormitory',
  },
  // Add more images as needed
];

export default function Home() {
    return (
      <Box
      sx={{
          height: '100vh',
          width: '100vw',
          overflow: 'auto',  // Allows scrolling when content overflows
          display: 'flex',
          flexDirection: 'column'
      }}
  >
  <TopBar />
      <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
          sx={{ width: '100%',
                paddingTop: '10vh', }}  // Ensure Stack takes full height
      >
      
          <img src="/images/Dormitory.jpg" alt="Dormitory" style= {{width: '100%', height: '800px' }}/>
          {/*<MainFeaturedPost images={images} />*/}
          <BookingBlock /> 
          <GoogleMap />
          <Footer />
      </Stack>
  </Box>
    );
}
