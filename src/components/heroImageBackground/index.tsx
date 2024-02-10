import cx from 'clsx';
import { Title, Text, Container, Button, Overlay, Group, MultiSelect, Select } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

const HeroImageBackground = () => {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Unlock Your Perfect Space: Buy or Rent, Your Property Awaits
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description} fw={500}>
            Find the perfect space to call your own or rent. Start your journey to finding your dream property today!
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </div>
        
      </div>
    </div>
  );
}

export default HeroImageBackground;