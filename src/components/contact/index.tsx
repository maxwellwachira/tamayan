import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import bg from './bg.svg';
import classes from './Contact.module.css';

export default function GetInTouch() {
    return (
        <Container mt={50}>
            <Paper shadow="xl" radius="lg">
                <div className={classes.wrapper}>
                    <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
                        <Text fz="lg" fw={700} className={classes.title} c="#fff">
                            Contact information
                        </Text>

                        <ContactIconsList />
                    </div>

                    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                        <Text fz="lg" fw={700} className={classes.title}>
                            Get in touch
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                                <TextInput label="Your name" placeholder="Your name" radius={10}/>
                                <TextInput label="Your email" placeholder="email.gmail.com" required radius={10}/>
                            </SimpleGrid>

                            <TextInput mt="md" label="Subject" placeholder="Subject" required radius={10} />

                            <Textarea
                                mt="md"
                                label="Your message"
                                placeholder="Please include all relevant information"
                                minRows={3}
                                radius={10}
                            />

                            <Group justify="flex-end" mt="md">
                                <Button type="submit" className={classes.control} radius={12}>
                                    Send message
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    );
}