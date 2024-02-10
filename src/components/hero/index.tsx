import { useRef } from 'react';
import { Container, Title, Button, Group, Text, List, ThemeIcon, rem, Stack, Grid } from '@mantine/core';
import { IconBuildingSkyscraper, IconBuildingWarehouse, IconCheck, IconDesk, IconMoneybag, IconReceiptDollar } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import classes from './Hero.module.css';
import { colors } from '@/constants/colors';
import { ArticleCard } from '@/components/articleCard';
import apartments from '@/assets/interior1.jpg';
import offices from '@/assets/office.jpg';
import warehouse from '@/assets/warehouse2.jpg';
import townhouse from '@/assets/interior2.jpg';

const slidesData = [
    {
        icon: IconReceiptDollar,
        title: 'XYZ Apartments',
        description: 'Luxurious, Spacious and Affordable',
        footerTitle: '5 Million KES',
        image: apartments
    },
    {
        icon: IconReceiptDollar,
        title: 'Pamoja Offices',
        description: 'Luxurious, Spacious and Affordable',
        footerTitle: '200K KES',
        image: offices
    },
    {
        icon: IconReceiptDollar,
        title: 'Mwananchi Warehouse',
        description: 'Luxurious, Spacious and Affordable ',
        footerTitle: '400K KES',
        image: warehouse
    },
    {
        icon: IconReceiptDollar,
        title: 'Bamburi TownHouse',
        description: 'Luxurious, Spacious and Affordable',
        footerTitle: '22 Million KES',
        image: townhouse
    },
    {
        icon: IconReceiptDollar,
        title: 'Mwananchi Warehouse',
        description: 'Luxurious, Spacious and Affordable ',
        footerTitle: '400K KES',
        image: warehouse
    },
    {
        icon: IconReceiptDollar,
        title: 'XYZ Apartments',
        description: 'Luxurious, Spacious and Affordable',
        footerTitle: '5 Million KES',
        image: apartments
    },
    {
        icon: IconReceiptDollar,
        title: 'Bamburi TownHouse',
        description: 'Luxurious, Spacious and Affordable',
        footerTitle: '22 Million KES',
        image: townhouse
    },
    {
        icon: IconReceiptDollar,
        title: 'Pamoja Offices',
        description: 'Luxurious, Spacious and Affordable',
        footerTitle: '200K KES',
        image: offices
    },
]

const Hero = () => {
    const autoplay = useRef(Autoplay({ delay: 5000 }));

    const properties = slidesData.map((el) => (
        <Grid.Col key={el.title} span={{ base:12, md:6, lg: 3}}>
            <Stack align='center'>
                <ArticleCard image={el.image} title={el.title} description={el.description} footerTitle={el.footerTitle} Icon={el.icon} />
            </Stack>
        </Grid.Col>
    ))
    return (
        <Container size="lg" mt={50}>
            <Text ta="center" mb={30} className={classes.title}>Featured Properties</Text>
            <Grid>
                {properties}
            </Grid>
        </Container>
    );
}

export default Hero;