import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Stack, Grid, Text } from '@mantine/core';
import { IconBuilding } from '@tabler/icons-react';
import { ArticleCard } from '@/components/articleCard';
import { Property } from '@/utils/interfaces';
import { urls } from '@/constants/urls';
import classes from './Hero.module.css';
import { formatNumberWithCommas } from '@/utils/functions';

const FeaturedProperties = () => {
    const [properties, setProperties] = useState<Property[] | null>(null);
    const [activePage, setActivePage] = useState(1);
    const [pageSize, setPageSize] = useState(50);

    const fetchProperties = async () => {
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties?sort=createdAt:desc&populate=*&filters[featured][$eq]=${true}&pagination[page]=${activePage}&pagination[pageSize]=${pageSize}`);
            // console.log(data.data)
            setProperties(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const featuredProperties = properties?.map((el) => {
        if (el.attributes.images.data) {
            return (
                <Grid.Col key={el.id} span={{ base: 12, md: 6, lg: 3 }} >
                    <Stack align='center' style={{ height: "100%" }}>
                        <ArticleCard
                            id={el.id}
                            image={`${urls.strapiBaseUrl}${el.attributes.images.data[0].attributes.url}`} title={el.attributes.propertyName}
                            description={el.attributes.summary}
                            footerTitle={`
                                ${formatNumberWithCommas(el.attributes.buyingPrice)} 
                                ${el.attributes.currency.data.attributes.currency == 'KES' ?
                                    (el.attributes.propertyType.data.attributes.type === "Apartment" || el.attributes.propertyType.data.attributes.type === "Villa" || el.attributes.propertyType.data.attributes.type.includes("Serviced")) ? "Million" : '' : ""} 
                                ${el.attributes.currency.data.attributes.currency}${el.attributes.propertyType.data.attributes.type.includes("Furnished") ? "/Month" : ""}
                                ${(el.attributes.propertyType.data.attributes.type === "Office" || el.attributes.propertyType.data.attributes.type === "Warehouse" || el.attributes.propertyType.data.attributes.type === "Showroom") ? `per ${el.attributes.size_unit.data.attributes.unit}` : ""}
                            `}
                            Icon={IconBuilding} propertyType={el.attributes.propertyType.data.attributes.type} />
                    </Stack>
                </Grid.Col>
            )
        }
    }
    )

    useEffect(() => {
        fetchProperties();
    }, []);


    return (
        <Container size="lg" mt={50}>
            <Text ta="center" mb={30} className={classes.title}>Featured Properties</Text>
            <Grid>
                {featuredProperties}
            </Grid>
        </Container>
    );
}

export default FeaturedProperties;