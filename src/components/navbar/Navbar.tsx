
import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Text,
    Container,
    NavLink
  } from '@mantine/core';
  import { IconBrandGolang } from '@tabler/icons-react';
  import { useDisclosure } from '@mantine/hooks';
  import { useNavigate } from "react-router-dom";
  import classes from './Navbar.module.css';
  

  export function Navbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const navigate = useNavigate(); 
    const changePage = (e: MouseEvent, page: string) => {
      console.log("e: ", e)
      navigate(page)
    }

    return (
      <Box >
          <header className={classes.header}>
            <Container>
            <Group justify="space-between" h="100%">
              <Box className={classes.logoSection}>
                <a href="/">
                  <IconBrandGolang size={30} />
                  <Text fw={700}>Blogs</Text>
                </a>
              </Box>
    
              <Box component="nav">
                <Group h="100%" gap={0} visibleFrom="sm">
                  <a onClick={e=>changePage(e, "/about")} className={classes.link}>
                    About
                  </a>
                  <a onClick={e=>changePage(e, "/blog")} className={classes.link}>
                    Blog
                  </a>
                </Group>
              </Box>
    
              <Group visibleFrom="sm">
                <Button variant="default" onClick={e => changePage(e, "/signin")}>
                  Sign in
                  </Button>
                <Button onClick={e => changePage(e, "/signup")}>Sign up</Button>
              </Group>
    
              <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
            </Group>
        </Container>
          </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Sign in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>

      </Box>
    );
  }