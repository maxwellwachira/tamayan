import { Badge, Card, Container, Grid, Group, Loader, Pagination, Select, Stack, Text } from "@mantine/core";
import { SearchBar } from "../../searchbar";
import { ArticleCard } from "../../articleCard";
import { colors } from "@/constants/colors";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { urls } from "@/constants/urls";
import axios from "axios";
import { ApiResponse, Property } from "@/utils/interfaces";
import Image from "next/image";
import noresults from "@/assets/no-results.png";
import { IconBuilding } from "@tabler/icons-react";
import { formatNumberWithCommas } from "@/utils/functions";


const ApartmentsOnly = () => {
    const [findings, setFindings] = useState<Property[] | null>(null);
    const [allData, setAllData] = useState<ApiResponse | null>(null)
    const [loading, setLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [pageSize, setpageSize] = useState<string | null>('20');

    const router = useRouter();
    const { location, beds, reason } = router.query;

    const fetchApartments = async () => {
        setLoading(true);
        let filter = `&filters[propertyType][type][$eq]=${encodeURIComponent("Fully Serviced Apartments")}`;
        if (location && Number(location) != 0) filter = filter + `&filters[county][county][$eq]=${location}`;
        if (beds && Number(beds) != 0) filter = filter + `&filters[no_of_bedrooms][$eq]=${beds}`;
        if (reason && Number(reason) != 0) filter = filter + `&filters[buyingReasons][reason][$in][0]=${reason}`;
        console.log(filter);
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties?pagination[page]=${activePage}&pagination[pageSize]=${pageSize}&populate=*${filter}`);
            console.log(data);
            setFindings(data.data);
            setAllData(data);
        } catch (error) {
            console.log(error)
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
                        {
                            el.attributes.images.data &&
                            <Grid.Col key={el.id} span={{ base: 12, md: 6, lg: 3 }} >
                                <Stack align='center'>
                                    <ArticleCard id={el.id} image={`${urls.strapiBaseUrl}${el.attributes.images.data[0].attributes.url}`} title={el.attributes.propertyName} description={el.attributes.summary} footerTitle={`${formatNumberWithCommas(el.attributes.buyingPrice)} ${el.attributes.currency.data.attributes.currency === "KES" ? "Million" : ""} ${el.attributes.currency.data.attributes.currency}`} Icon={IconBuilding} propertyType={el.attributes.propertyType.data.attributes.type} />
                                </Stack>
                            </Grid.Col>
                        }
                    </>
                ))}
            </>
        )
    }

    useEffect(() => {
        fetchApartments();
    }, [router.query, activePage, pageSize])

    return (
        <Container mt={30} size="lg">
            <Text ta="center" fz={23} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"} mb={20}>Search Apartments on Rent</Text>
            <SearchBar />
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
    )
}

export default ApartmentsOnly;