import { Container } from "@mantine/core";
import Hero from "../hero";
import { SearchBar } from "../searchbar";


const ApartmentsOnly = () => {
    return (
        <Container mt={30}>
            <SearchBar />
            <Hero />
        </Container>
    )
}

export default ApartmentsOnly;