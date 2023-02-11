'use client'


import {Box, Container, Grid, Heading, SimpleGrid,Text} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'



export default function Footer() {
  return (
    <Box bg={'black'}>
<Container maxW={'1400'}>
    <SimpleGrid templateColumns={{base: 'repeat(1,1fr)' ,md:'repeat(2,1fr)', lg: 'repeat(4,1fr)'}}py={'10px'}>

<Box>
<Grid placeItems={'center'}>
    <Heading color={'white'} > About Us</Heading>
    
    <Image  src={'/Footer.png'} alt='Panaverse' width={80} height={80}></Image  >
    
    <Text color={'white'}>The Future of the Web is Web 3.0</Text>
    </Grid>
</Box>
<Box>
<Grid color={'white'} placeItems={'center'}>
    
    <Heading >UseFul Links</Heading>
   
    <Link href="">Home</Link>
    <Link href="">About</Link>
    </Grid>
</Box>
<Box>
<Grid color={'white'} placeItems={'center'}>
    
    <Heading >Follow Us</Heading>
   
    <Link href="https://www.facebook.com/groups/panaverse">FaceBook</Link>
    <Link href="https://www.youtube.com/@panaverse">Youtube</Link>
    <Link href="https://twitter.com/Panaverse_edu">Twitter</Link>
    </Grid>
</Box>
<Box>
<Grid color={'white'} placeItems={'center'}>
    
    <Heading >Contact Us</Heading>
   
    <Link href="/">+92 123 4567890</Link>
    <Link href="/">abcd@gmail.com</Link>
    <Link href="/">Karachi,Pakistan </Link>
    </Grid>
</Box>


    </SimpleGrid>
</Container>
    </Box>
  )
}
