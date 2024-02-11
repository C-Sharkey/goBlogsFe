import { Text, Title, TextInput, Button, Image, Container, Box } from '@mantine/core';
import image from './gopher.png';
import classes from './Banner.module.css';

export function Banner() {
  return (

    <Box className={classes.background}>

    <Container className={classes.sectionWrapper} id="banner">
    <div className={classes.wrapper} >
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      <Image src={image} className={classes.image} />
    </div>
    </Container>
    </Box>
  );
}