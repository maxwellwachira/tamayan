import { Container, Group, Stack, Text } from "@mantine/core";
import classes from "./Stats.module.css";

const Stats = () => {
    return (
        <Container mt={50}>
            <Stack align="center">
                <Group gap={50} justify="center">
                    <Group>
                        <Text className={classes.stats}>50+</Text>
                        <Text>Premium Projects</Text>
                    </Group>
                    <Group>
                        <Text className={classes.stats}>200+</Text>
                        <Text>Happy Customers</Text>
                    </Group>
                    <Group>
                        <Text className={classes.stats}>1+</Text>
                        <Text>Award Wining</Text>
                    </Group>
                </Group>
            </Stack>
        </Container>
    )

}

export default Stats;