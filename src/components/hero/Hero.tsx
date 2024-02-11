import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './gopher.png';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Container size="md" id="hero">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>Go Powered</span> Writing App <br /> 
          </Title>
          <Text c="dimmed" mt="md">
            Nothing out of the ordinary, just a simple writing app powered by Go. Pretty much does the bare bones of what you'd expect from a writing app.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Powered by Go</b> – the backend is written in Go, the frontend is written in React
            </List.Item>
            <List.Item>
              <b>Streamlined features</b> – because we havent added much yet
            </List.Item>
            <List.Item>
              <b>Free to use</b> – cause why not
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Sign In
            </Button>
          </Group>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}