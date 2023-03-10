import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Types
import BodyOne from 'components/core/BodyOne';
import BodyTwo from 'components/core/BodyTwo';
import Box from 'components/core/Box';
import Collapse from 'components/core/Collapse';
import Divider from 'components/core/Divider';
import Drawer from 'components/core/Drawer';
import List from 'components/core/List';
import ListItem from 'components/core/ListItem';
import ListItemButton from 'components/core/ListItemButton';
import ListItemIcon from 'components/core/ListItemIcon';
import ListItemText from 'components/core/ListItemText';
import ArticleIcon from 'components/icon/Article';
import type { FC } from 'react';
import Logo from '../Link/Logo';
import ChevronRightIcon from 'components/icon/ChevronRight';
import DarkModeIcon from 'components/icon/DarkMode';
import AppBarSpacer from 'components/core/AppBarSpacer';

// Custom Types
export interface DocSidebarProps {}

const sections = [
  {
    title: 'getting-started',
    items: [
      { title: 'overview', link: '/overview', sort: 0 },
      { title: 'installation', link: '/installation', sort: 1 },
    ],
  },
  {
    title: 'Utilities',
    items: [
      { title: 'basic', link: '/basic', sort: 0 },
      { title: 'media', link: '/media', sort: 1 },
    ],
  },
];

const fixTitle = (title: string) => {
  const withoutDash = title.replaceAll('-', ' ');

  return withoutDash.slice(0, 1).toUpperCase() + withoutDash.slice(1);
};

const DocSidebar: FC<DocSidebarProps> = () => {
  // States
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  // Hooks
  const asPath = useRouter().asPath;
  useEffect(() => {
    initializeCollapse();
  }, []);

  // Utilities
  const initializeCollapse = () => {
    let newState: { [key: string]: boolean } = {};

    sections.forEach((section, index) => {
      newState[section.title] = index === 0 ? true : false;
    });

    setOpen(newState);
  };

  const toggleSection = (title: string, isOpen: boolean) => () => {
    const titles = Object.keys(open);
    const newOpen: { [key: string]: boolean } = {};
    titles.forEach((t) => {
      newOpen[t] = t === title ? isOpen : false;
    });

    setOpen(newOpen);
  };

  const selected = (path: string) => asPath === path;

  return (
    <Box
      sx={({}) => ({
        height: '100vh',
        top: 0,
        minWidth: '17rem',
        maxWidth: '17rem',
        position: 'sticky',
      })}
    >
      <AppBarSpacer />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '91%',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={({ spacing }) => ({ m: spacing(1, 0) })}>
          {sections.map((section, index) => (
            <List
              key={section.title + index}
              sx={({ spacing }) => ({
                p: spacing(0, 2),
                fontFamily: 'Roboto',
              })}
            >
              <ListItemButton
                disableRipple
                onClick={toggleSection(section.title, !open[section.title])}
                sx={({ spacing }) => ({
                  borderRadius: 2,
                  p: spacing(0.5, 1),
                })}
              >
                {/* <ListItemIcon sx={{ minWidth: '2rem' }}>
                  <ArticleIcon color='primary' />
                </ListItemIcon> */}
                <ListItemText primary={fixTitle(section.title)} />
                {open[section.title] ? (
                  <ChevronRightIcon sx={{ transform: 'rotate(90deg)' }} />
                ) : (
                  <ChevronRightIcon />
                )}
              </ListItemButton>
              <Collapse
                in={open[section.title]}
                sx={({ spacing }) => ({
                  pl: spacing(2),
                })}
              >
                {section.items.map((item, index) => (
                  <ListItemButton
                    key={item.title + index}
                    sx={({ spacing }) => ({
                      borderRadius: 2,
                      p: spacing(0.5, 1),
                    })}
                  >
                    <ListItemText
                      primary={
                        <BodyTwo
                          color={
                            selected(`/docs/${section.title}/${item.title}`)
                              ? 'primary.main'
                              : undefined
                          }
                        >
                          {fixTitle(item.title)}
                        </BodyTwo>
                      }
                    />
                  </ListItemButton>
                ))}
              </Collapse>
            </List>
          ))}
        </Box>
        <Box>
          <Divider variant='middle' />
          <List sx={({ spacing }) => ({ p: spacing(1, 2) })}>
            <ListItemButton
              disableRipple
              sx={({ spacing }) => ({
                borderRadius: 2,
                p: spacing(0.5, 1),
              })}
            >
              <ListItemIcon sx={{ minWidth: '2rem' }}>
                <DarkModeIcon />
              </ListItemIcon>
              <ListItemText primary='system' />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default DocSidebar;
