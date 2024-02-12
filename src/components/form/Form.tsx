import React from 'react';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import { Link, useLocation } from "react-router-dom"
  import classes from './Form.module.css';
  
  export function Form({type}: {type: string}) {
    const [hasAccount, setHasAccount] = React.useState(type==="signIn")
    const location = useLocation();
    const { pathname } = location;
    console.log("pathname: ",  pathname)
    console.log("type: ",  type)
    const checkHasAccount = () => pathname === "/signIn";
    const toggleLink = (e: Event, pathname: string) => {
      console.log("e: ", e)
      console.log("pathname toggle 1: ",  pathname)
      setHasAccount(!hasAccount)
      console.log("pathname toggle 2: ",  pathname)
    }
    return (
      <Container size={420} my={140} className={classes.formWrapper}>
        <Title ta="center" className={classes.title}>
          {hasAccount ? "Create an account" :  "Welcome back!"}
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
        {hasAccount ? "Do not have an account yet? " : "Already have an account? "}
          <Link to={hasAccount ? "/signIn" : "/signUp"} onClick={(e) => toggleLink(e, pathname)}>
              {hasAccount ? "Sign in" : "Create account"}
          </Link>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md" id="formBox">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            {hasAccount ?
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
            : null}
          </Group>
          <Button fullWidth mt="xl">
          {hasAccount ? "Sign in" : "Create account"}
          </Button>
        </Paper>
      </Container>
    );
  }