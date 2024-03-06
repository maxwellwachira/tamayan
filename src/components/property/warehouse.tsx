import { Badge, Card, Container, Grid, Group, Loader, Stack, Text } from "@mantine/core";
import { SearchBar } from "../searchbar";
import { colors } from "@/constants/colors";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { urls } from "@/constants/urls";
import axios from "axios";
import { Property } from "@/utils/interfaces";
import { ArticleCard } from "../articleCard";
import Image from "next/image";
import noresults from "@/assets/no-results.png";
import { IconBuilding } from "@tabler/icons-react";


const WarehouseOnly = () => {
    const [findings, setFindings] = useState<Property[] | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { location, size, reason } = router.query;

    const fetchWarehouses = async () => {
        setLoading(true);
        let filter = `&filters[propertyType][type][$eq]=${encodeURIComponent("Warehouse")}`;
        if (location &&  Number(location) != 0) filter = filter + `&filters[county][county][$eq]=${location}`;
        if (size && Number(size) != 0) filter = filter + `&filters[size][$between]=${(Number(size)*1000)-999}&filters[size][$between]=${Number(size)*1000}`;
        if (reason && Number(reason) != 0) filter = filter + `&filters[buyingReasons][reason][$in][0]=${reason}`;
        console.log(filter);
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties?populate=*${filter}`);
            console.log(data);
            setFindings(data.data);
        } catch (error) {
            console.log(error)
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
        fetchWarehouses();
    }, [router.query])

    return (
        <Container mt={30} size="lg">
            <Text ta="center" fz={23} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"} mb={20}>Search Warehouses</Text>
            <SearchBar />
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
    )
}

export default WarehouseOnly;