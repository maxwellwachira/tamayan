import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Container,
} from '@mantine/core';
import logo from '@/assets/logo.png';
import { useDisclosure } from '@mantine/hooks';
import {
    IconChevronDown,
    IconBuildingSkyscraper,
    IconDesk,
    IconBuildingWarehouse,
    IconHomeStar,
} from '@tabler/icons-react';
import classes from './Header.module.css';
import buttonClasses from '@/styles/Button.module.css';
import Image from 'next/image';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const mockdata = [
    {
        icon: IconBuildingSkyscraper,
        title: 'Apartments on Sale',
        description: 'Find your dream apartment, from cozy studios to luxurious penthouses.',
    },
    {
        icon: IconDesk,
        title: 'Offices on Sale',
        description: 'Discover productive workspaces tailored to your business needs',
    },
    {
        icon: IconBuildingWarehouse,
        title: 'Warehouses on Sale',
        description: 'Streamline operations with our range of efficient warehouse spaces.',
    },
    {
        icon: IconHomeStar,
        title: 'Town houses on Sale',
        description: 'Experience charm and comfort in our townhouses',
    },
];

const Header = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [active, setActive] = useState(0);
    const router = useRouter();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: rem(22), height: rem(22) }} color={colors.secondaryColor} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500} c={colors.primaryColor}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box>
            <header className={classes.header}>
                <Container size="xl" h="100%">
                    <Group justify="space-between" h="100%" align='center'>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                width={180}
                            />
                        </Link>

                        <Group h="100%" gap={0} visibleFrom="sm">
                            <a href="/" className={classes.link} data-active={router.pathname == "/" ? true : undefined}>
                                Home
                            </a>
                            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                                <HoverCard.Target>
                                    <a href="#" className={classes.link}>
                                        <Center inline>
                                            <Box component="span" mr={5}>
                                                Buy
                                            </Box>
                                            <IconChevronDown
                                                style={{ width: rem(16), height: rem(16) }}
                                            />
                                        </Center>
                                    </a>
                                </HoverCard.Target>

                                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                    {/* <Group justify="space-between" px="md">
                                        <Text fw={500}>Properties on Sale</Text>
                                        <Anchor href="#" fz="xs">
                                            View all
                                        </Anchor>
                                    </Group>

                                    <Divider my="sm" /> */}

                                    <SimpleGrid cols={2} spacing={0}>
                                        {links}
                                    </SimpleGrid>

                                    {/* <div className={classes.dropdownFooter}>
                                        <Group justify="space-between">
                                            <div>
                                                <Text fw={500} fz="sm">
                                                    Get started
                                                </Text>
                                                <Text size="xs" c="dimmed">
                                                    Unlock Your Dream Property Today: Where Every Property Tells a Story!
                                                </Text>
                                            </div>
                                            <Button className={buttonClasses.secondaryButton}>Get started</Button>
                                        </Group>
                                    </div> */}
                                </HoverCard.Dropdown>
                            </HoverCard>
                            <a href="/property/apartments" className={classes.link} data-active={router.pathname == "/property/apartments" ? true : undefined}>
                                Rental Properties
                            </a>
                            <a href="/property/airbnb" className={classes.link} data-active={router.pathname == "/property/airbnb" ? true : undefined}>
                                Airbnb
                            </a>
                            <a href="/faqs" className={classes.link} data-active={router.pathname == "/faqs" ? true : undefined}>
                                FAQs
                            </a>
                        </Group>

                        <Group visibleFrom="sm">
                            <Button className={buttonClasses.outlineSecondaryButton} component='a' href="/contact" data-contact={router.pathname == "/contact" ? true : undefined} >Contact Us</Button>
                        </Group>

                        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" color={colors.primaryColor} />
                    </Group>
                </Container>
            </header>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                style={{ header: { color: colors.secondaryColor } }}
                padding="md"
                title="Menu"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="/" className={classes.link} data-active={router.pathname == "/" ? true : undefined}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Buy
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="/rental" className={classes.link} data-active={router.pathname == "/rental" ? true : undefined}>
                        Rental Properties
                    </a>
                    <a href="/property/airbnb" className={classes.link} data-active={router.pathname == "/property/airbnb" ? true : undefined}>
                        Airbnb
                    </a>
                    <a href="/faqs" className={classes.link} data-active={router.pathname == "/faqs" ? true : undefined}>
                        FAQs
                    </a>
                    <Divider my="sm" />

                    <Group pl={15}>
                        <Button className={buttonClasses.outlineSecondaryButton} data-contact={router.pathname == "/contact" ? true : undefined} component='a' href="/contact">Contact Us</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}

export default Header;