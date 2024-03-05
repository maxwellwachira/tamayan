import { Badge, Container, Stack, Text } from "@mantine/core";
import Hero from "../hero";
import { SearchBar } from "../searchbar";
import { colors } from "@/constants/colors";
import { useEffect } from "react";
import { useRouter } from "next/router";


const ApartmentsOnly = () => {
    const router = useRouter();
    const fetchApartments = async () => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApartments();
    }, [router.query])

    return (
        <Container mt={30} size="lg">
            <Text ta="center" fz={23} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"} mb={20}>Search Apartments</Text>
            <SearchBar />
            {/* <Stack mt={30} justify="center" align="center">
                <Badge variant="gradient" gradient={{ from: 'blue', to: 'teal' }} size="lg">
                    {findings.length} {findings.length > 1 ? "results" : "result"} found
                </Badge>
            </Stack> */}
        </Container>
    )
}

export default ApartmentsOnly;