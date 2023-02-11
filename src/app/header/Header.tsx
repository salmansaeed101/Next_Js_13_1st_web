
"use client";

import {Box, Button, Container, Flex, Text, VStack, Grid} from '@chakra-ui/react'
import Image from 'next/image';
import CoreComponents from '../base/base';


export default function Headersection() {
  return (
    <>
    <Box as='main'>
      <Container  maxW='8xl'>
<Flex flexDir={{base:"column", md:"row"}} align="center" maxW={"1440px"} mx="auto" pt={{base:'5',md:'10'}} 
 px={{base:"10",md:"20"}}    >
<Box as="section"  order={{base:2,md:1 }} textAlign={{base:"center" ,md:"start"}} justifyContent='normal'>
<Text fontWeight={'bold'}>
Presidential Initiative for Artificial Intelligence and Computing 
(PIAIC)

</Text>
<Text fontWeight={{base:'bold', md:'bold', lg:'extrabold'}} fontSize={{base:'3xl',md:'3xl', lg:'5xl'}}>
Certified Web 3.0 and Metaverse Developer

</Text>
<Text>

A One and Quarter Years Panaverse DAO Earn as you Learn Program
Getting Ready for the Next Generation of the Internet
Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies 
<br/>
<br/>
<br/>
<Button as='a' href='https://portal.piaic.org/' backgroundColor={'blue'}  color={'white'} >
  Apply
</Button>

</Text>
</Box>
<Box as='section' order={{base:1,md:2}}flex='1'
mx={{base:"0",md:"auto"}}
minW='250px'   >
<Box>
<Image 
src={"/pre.jpg"}
width={2000}
height={2000}
alt=""
/>
</Box>
</Box>

</Flex>

      </Container>
    </Box>

    {/*  Secound Step   */}


    <Box as='main'>
      <Container  maxW='8xl'>
<Flex flexDir={{base:"column", md:"row"}} align="center" maxW={"1440px"} mx="auto" pt={{base:'5',md:'10'}} 
 px={{base:"10",md:"20"}}  textAlign={{base:"center" ,md:"center"}} justifyContent='normal'> 
<Box as="section"  order={{base:2,md:1 }} >
<Text fontWeight={'bold'}>
The Panaverse Community and Syllabus:

</Text>


<Text>

The internet is without a doubt the most important technological development in human history.
 Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.
<br/>
</Text>
<VStack  py='10'>
  <Box maxW={{base:'150px', md:'50%'}}
  mx={{base:'0' ,md:'auto'}}
  minW='15px'>
<Image src={'/meta1.png'}
width='500'
height='500'
alt=" "
/>
  </Box>
</VStack>

<Text>
Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.



</Text>

</Box>

</Flex>

      </Container>
      <br/>
      <br/>
      

      {/* Section 3 */}


      <Container  maxW='8xl'>
<Flex flexDir={{base:"column", md:"row"}} align="center" maxW={"1440px"} mx="auto" pt={{base:'5',md:'10'}} 
 px={{base:"10",md:"20"}}    >
<Box as="section"  order={{base:1, md:2 }} textAlign={{base:"center" ,md:"center"}} justifyContent='normal'>
<Text fontWeight={'bold'} paddingLeft={'10px'} fontSize={'18px'} alignItems={'center'} justifyContent={'center'}>
Program of Studies


</Text>

<Text paddingLeft={'10px'}>
This curriculum is intended for beginners who want to learn software development from the ground up. 
The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development.
 It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.


<br/>
<br/>
<br/>


</Text>
</Box>
<Box as='section' order={{base:2,md:1}}flex='1'
mx={{base:"0", md:"auto"}}
minW='250px'   >
<Box>
<Image 
src={"/meta2.png"}
width={2000}
height={2000}
alt=""
/>
</Box>
</Box>

</Flex>
<CoreComponents/>

      </Container>
    </Box>

    </>
  )
}
