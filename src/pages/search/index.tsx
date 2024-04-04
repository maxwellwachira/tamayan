import { ArticleCard } from "@/components/articleCard";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { SearchBar } from "@/components/searchbar";
import { urls } from "@/constants/urls";
import { ApiResponse, Property } from "@/utils/interfaces";
import { Badge, Box, Card, Container, Grid, Group, Loader, Pagination, Select, Stack, Text } from "@mantine/core";
import { IconBuilding } from "@tabler/icons-react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import noresults from "@/assets/no-results.png";
import { useMediaQuery } from "@mantine/hooks";
import { colors } from "@/constants/colors";
import { formatNumberWithCommas } from "@/utils/functions";


const SearchProperties = () => {
    const router = useRouter();
    const { location, propertyType } = router.query;
    const [findings, setFindings] = useState<Property[] | null>(null);
    const [loading, setLoading] = useState(false);
    const smBreakPoint = useMediaQuery('(max-width: 48em)');
    const [activePage, setActivePage] = useState(1);
    const [pageSize, setpageSize] = useState<string | null>('20');
    const [allData, setAllData] = useState<ApiResponse | null>(null)

    const searchProperty = async () => {
        setLoading(true);
        let filters = "&";
        if (location && Number(location) != 0) filters = filters + `filters[county][county][$eq]=${location}&`;
        if (propertyType && Number(propertyType) != 0) filters = filters + `filters[propertyType][type][$eq]=${propertyType}`;
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties?pagination[page]=${activePage}&pagination[pageSize]=${pageSize}&populate=*${filters}`);
            // console.log(data);
            setFindings(data.data);
            setAllData(data);
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => setLoading(false),
            1000);

    }

    const updatePageSize = (value: string | null) => {
        setpageSize(value);
        setActivePage(1);
    }

    const displayResults = () => {
        return (
            <>
                {findings?.map((el) => (
                    <>
                        {el.attributes.images.data &&
                            <Grid.Col key={el.id} span={{ base: 12, md: 6, lg: 3 }} >
                                <Stack align='center' style={{ height: "100%" }}>
                                    <ArticleCard
                                        id={el.id}
                                        image={`${urls.strapiBaseUrl}${el.attributes.images.data[0].attributes.url}`} title={el.attributes.propertyName}
                                        description={el.attributes.summary}
                                        footerTitle={`${formatNumberWithCommas(el.attributes.buyingPrice)} ${el.attributes.currency.data.attributes.currency == 'KES' ? (el.attributes.propertyType.data.attributes.type === "Apartment" || el.attributes.propertyType.data.attributes.type === "Villa") ? "Million" : '' : ""} ${el.attributes.currency.data.attributes.currency} ${(el.attributes.propertyType.data.attributes.type === "Office" || el.attributes.propertyType.data.attributes.type === "Warehouse") ? `per ${el.attributes.size_unit.data.attributes.unit}` : ""}`}
                                        Icon={IconBuilding} propertyType={el.attributes.propertyType.data.attributes.type} />
                                </Stack>
                            </Grid.Col>
                        }
                    </>
                ))}
            </>
        )
    }

    useEffect(() => {
        searchProperty();
    }, [router.query.location, router.query.propertyType, activePage, pageSize]);
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
                                <Group mt={30} justify="center" align="center" gap={30}>
                                    <Badge variant="gradient" gradient={{ from: 'blue', to: 'teal' }} size="lg">
                                        {findings.length} {findings.length > 1 ? "results" : "result"} found
                                    </Badge>
                                    <Group gap={10}>
                                        <Text fz={14}>Apartments Per page:</Text>
                                        <Select
                                            data={['20', '30', '40', '50']}
                                            radius={5}
                                            size="xs"
                                            placeholder="Select Page size"
                                            value={pageSize}
                                            onChange={(value) => updatePageSize(value)}
                                            style={{
                                                width: 70
                                            }}
                                        />
                                    </Group>
                                </Group>
                                <Grid mt={20}>
                                    {displayResults()}
                                </Grid>
                                <Stack align="center" justify="center" mt={30}>
                                    <Pagination total={allData ? allData.meta.pagination.pageCount : 1} value={activePage} onChange={setActivePage} mt="sm" color="teal" />
                                </Stack>
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