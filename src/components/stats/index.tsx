import { Container, Group, Stack, Text } from "@mantine/core";
import classes from "./Stats.module.css";

const Stats = () => {
    return (
        <Container>
            <Stack align="center">
                <Group gap={50}>
                    <Group>
                        <Text className={classes.stats}>9K+</Text>
                        <Text>Premium Projects</Text>
                    </Group>
                    <Group>
                        <Text className={classes.stats}>5K+</Text>
                        <Text>Happy Customers</Text>
                    </Group>
                    <Group>
                        <Text className={classes.stats}>58+</Text>
                        <Text>Award Wining</Text>
                    </Group>
                </Group>
            </Stack>
        </Container>
    )

}

export default Stats;