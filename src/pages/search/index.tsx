import { ArticleCard } from "@/components/articleCard";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { SearchBar } from "@/components/searchbar";
import { urls } from "@/constants/urls";
import { Property } from "@/utils/interfaces";
import { Box, Container, Grid, Stack } from "@mantine/core";
import { IconBuilding } from "@tabler/icons-react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const ApartmentsPage = () => {
    const router = useRouter();
    const { location, propertyType } = router.query;
    const [findings, setFindings] = useState<Property[] | null>(null);

    const searchProperty = async () => {
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties?populate=*&filters[county][county][$eq]=${location}&filters[propertyType][type][$eq]=${propertyType}`);
            console.log(data);
            setFindings(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const displayResults = () => {
        return (
            <>
                {findings?.map((el, index) => (
                    <Grid.Col key={el.id} span={{ base: 12, md: 6, lg: 3 }} >
                        <Stack align='center'>
                            <ArticleCard image={`${urls.strapiBaseUrl}${el.attributes.images.data[0].attributes.url}`} title={el.attributes.propertyName} description={el.attributes.summary} footerTitle={`${el.attributes.buyingPrice} Million ${el.attributes.currency.data.attributes.currency}`} Icon={IconBuilding} />
                        </Stack>
                    </Grid.Col>
                ))}
            </>
        )
    }

    useEffect(() => {
        searchProperty();
    }, [])
    return (
        <>
            <Head>
                <title>Tamayan Properties | Search Property Page</title>
                <meta name="description" content="Tamayan Single Property Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container size="lg">
                <Box mt={30}>
                    <SearchBar />
                </Box>
                <Grid mt={30}>
                    {displayResults()}
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default ApartmentsPage;