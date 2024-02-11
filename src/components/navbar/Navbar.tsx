
import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Text
  } from '@mantine/core';
  import { IconBrandGolang } from '@tabler/icons-react';
  import { useDisclosure } from '@mantine/hooks';
  import classes from './Navbar.module.css';
  
// Todo: fix css eslint error

  export function Navbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">

            <Box className={classes.logoSection}>
              <a href="/">
                <IconBrandGolang size={30} />
                <Text fw={700}>Blogs</Text>
              </a>
            </Box>
  
            <Box component="nav">
              <Group h="100%" gap={0} visibleFrom="sm">
                <a href="#" className={classes.link}>
                  About
                </a>
                <a href="#" className={classes.link}>
                  Blog
                </a>
              </Group>
            </Box>
  
            <Group visibleFrom="sm">
              <Button variant="default">Sign in</Button>
              <Button>Sign up</Button>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
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