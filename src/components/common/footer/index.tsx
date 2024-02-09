import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import logo from '@/assets/logo-2.png';
import classes from './Footer.module.css';
import Image from 'next/image';
import { colors } from '@/constants/colors';

const data = [
    {
        title: 'About',
        links: [
            { label: 'Home', link: '#' },
            { label: 'Buy', link: '#' },
            { label: 'Rentals', link: '#' },
            { label: 'FAQs', link: '#' },
        ],
    },
    {
        title: 'Buy',
        links: [
            { label: 'Apartments', link: '#' },
            { label: 'Offices', link: '#' },
            { label: 'Warehouses', link: '#' },
            { label: 'Town Houses', link: '#' },
        ],
    },
    {
        title: 'Social',
        links: [
            { label: 'Twitter', link: '#' },
            { label: 'Facebook', link: '#' },
            { label: 'Instagram', link: '#' },
            { label: 'Linkedin', link: '#' },
        ],
    },
];

const Footer = () => {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title} c={colors.primaryColor}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div style={{maxWidth: 300}}>
                    <div className={classes.logo}>
                        <Image
                            src={logo}
                            alt="logo"
                            width={200}
                        />
                    </div>
                    <Text c="dimmed" fz="sm" className={classes.description}>
                        Unlock Your Real Estate Journey: Where Every Step Guides You Towards Your Dream Property.
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © 2024 Tamayan Properties. All rights reserved.
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer;