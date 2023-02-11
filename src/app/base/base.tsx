import Link from 'next/link'
import Image from 'next/image'
import { Box,Card,CardBody,Stack,Text,Heading, Flex,Grid } from '@chakra-ui/react'




interface StateElements{
    title:string;
    content?:string;
    imageUrl:string;
    imageAlt:string;

}

function CardToDispaly(props:StateElements){
    const {title,content,imageUrl,imageAlt}=props;
return(
<>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={500}
      height={500}

      
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {content}
      </Text>
      
    </Stack>
  </CardBody>
 </Card>
</>
)
}








const coreQuarter=[{
    title:"Quarter I (Core)",
    content:"CS-101: Object-Oriented Programming using TypeScript",
    imagePath:"/meta3.png",
    imagealt:"",
    url:"/"
},
{
    title:"Quarter II (Core)",
    content:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs ",
    imagePath:"/meta4.png",
    imagealt:"",
    url:"/"

},

{
    title:"Quarter III (Core)",
    content:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    imagePath:"/meta5.png",
    imagealt:"",
    url:"/"   
},
]
export default function CoreComponents(){
    return   <>
       
        <Flex flexDir={{base:"column", md:"row"}} align="center" 
        maxW={"1440px"} mx="auto" pt={{base:'5',md:'10'}} 
 px={{base:"10",md:"20"}}    >
    
<Box mx={'auto'} pt="5" pb="10" textAlign={'center'}>
    <Heading>
    Core Courses (Common in All Specializations):

    </Heading>
    <Text>
    Every participant of the program will start by 
    completing the following three core courses:
    </Text>


<Grid 
templateColumns={{
    base:"repeat(1,1fr)",
    sm:"repeat(2,1fr)",
    md:"repeat(3,1fr)",
}}
gap='6'
mx={'auto'}
maxW={"8xl"}

>
{coreQuarter.map((elm:any)=>{
    return <Link key={elm} href={elm.url}>
        <CardToDispaly
        imageAlt={elm.imagealt}
        imageUrl={elm.imagePath}
        title={elm.title}
        content={elm.content}
        />
    </Link>
})}


</Grid>
</Box>
</Flex>
        </>
    
}