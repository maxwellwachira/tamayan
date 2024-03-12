import { ArticleCard } from "@/components/articleCard";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { SearchBar } from "@/components/searchbar";
import { urls } from "@/constants/urls";
import { Property } from "@/utils/interfaces";
import { Badge, Box, Card, Container, Grid, Group, Loader, Stack, Text } from "@mantine/core";
import { IconBuilding } from "@tabler/icons-react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import noresults from "@/assets/no-results.png";
import { useMediaQuery } from "@mantine/hooks";
import { colors } from "@/constants/colors";


const SearchProperties = () => {
    const router = useRouter();
    const { location, propertyType } = router.query;
    const [findings, setFindings] = useState<Property[] | null>(null);
    const [loading, setLoading] = useState(false);
    const smBreakPoint = useMediaQuery('(max-width: 48em)');

    const searchProperty = async () => {
        setLoading(true);
        let filters = "&";
        if(location && Number(location) != 0) filters = filters + `filters[county][county][$eq]=${location}&`;
        if(propertyType && Number(propertyType) != 0) filters = filters + `filters[propertyType][type][$eq]=${propertyType}`;
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties?populate=*${filters}`);
            console.log(data);
            setFindings(data.data);
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => setLoading(false),
            1000);

    }

    const displayResults = () => {
        return (
            <>
                {findings?.map((el) => (
                    <Grid.Col key={el.id} span={{ base: 12, md: 6, lg: 3 }} >
                        <Stack align='center'>
                            <ArticleCard id={el.id} image={`${urls.strapiBaseUrl}${el.attributes.images.data[0].attributes.url}`} title={el.attributes.propertyName} description={el.attributes.summary} footerTitle={`${el.attributes.buyingPrice} Million ${el.attributes.currency.data.attributes.currency}`} Icon={IconBuilding} propertyType={el.attributes.propertyType.data.attributes.type} />
                        </Stack>
                    </Grid.Col>
                ))}
            </>
        )
    }

    useEffect(() => {
        searchProperty();
    }, [router.query.location, router.query.propertyType]);
    return (
        <>
            <Head>
                <title>Tamayan Properties | Search Property Page</title>
                <meta name="description" content="Tamayan Single Property Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container size="lg">
                <Text ta="center" fz={23} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"} mt={20}>Search Properties</Text>
                <Box mt={15}>
                    <SearchBar />
                </Box>
                {loading ? <Stack mt={60} align="center" justify="center">
                    <Loader color={colors.primaryColor} type="dots" />
                </Stack>
                    :
                    <>
                        {(findings && findings.length > 0) ?
                            <>
                                <Stack mt={30} justify="center" align="center">
                                    <Badge variant="gradient" gradient={{ from: 'blue', to: 'teal' }} size="lg">
                                        {findings.length} {findings.length > 1 ? "results" : "result"} found
                                    </Badge>
                                </Stack>
                                <Grid mt={20}>
                                    {displayResults()}
                                </Grid>
                            </>
                            :
                            <Stack justify="center" align="center" mt={20}>
                                <Card shadow="lg" radius="md" withBorder>
                                    <Group>
                                        <Image
                                            src={noresults}
                                            alt="no results"
                                            width={40}
                                            height={40}
                                        />
                                        <Text>No Results found</Text>
                                    </Group>
                                </Card>
                            </Stack>
                        }
                    </>
                }
            </Container>
            <Footer />
        </>
    )
}

export default SearchProperties;