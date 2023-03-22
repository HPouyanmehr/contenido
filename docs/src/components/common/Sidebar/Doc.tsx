import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Types
import type { FC } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';
import BodyTwo from 'components/core/BodyTwo';
import Box from 'components/core/Box';
import Collapse from 'components/core/Collapse';
import Divider from 'components/core/Divider';
import List from 'components/core/List';
import ListItemButton from 'components/core/ListItemButton';
import ListItemButtonLink from 'components/core/LIstItemButtonLink';
import ListItemIcon from 'components/core/ListItemIcon';
import ListItemText from 'components/core/ListItemText';

// Custom Icon Components
import DarkModeIcon from 'components/icon/DarkMode';
import ChevronRightIcon from 'components/icon/ChevronRight';

// Custom Contexts
import { useThemeModeContext } from 'store/context/themeMode';

// Custom Types
import type { DocSidebarProps } from 'types/docs';
export interface DocSidebarComponentProps {
  sidebar: DocSidebarProps[];
}

const fixTitle = (title: string) => {
  const withoutDash = title.replaceAll('-', ' ');

  return withoutDash.slice(0, 1).toUpperCase() + withoutDash.slice(1);
};

const DocSidebar: FC<DocSidebarComponentProps> = (props) => {
  // Props
  const { sidebar } = props;

  // States
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  // Hooks
  const asPath = useRouter().asPath;
  const { mode, dispatch } = useThemeModeContext();

  const initializeCollapse = useCallback(() => {
    let newState: { [key: string]: boolean } = {};

    sidebar.forEach((section, index) => {
      newState[section.title] = index === 0 ? true : false;
    });

    setOpen(newState);
  }, [sidebar]);

  useEffect(() => {
    initializeCollapse();
  }, [initializeCollapse]);

  // Utilities
  const toggleSection = (title: string, isOpen: boolean) => () => {
    const titles = Object.keys(open);
    const newOpen: { [key: string]: boolean } = {};
    titles.forEach((t) => {
      newOpen[t] = t === title ? isOpen : false;
    });

    setOpen(newOpen);
  };

  const toggleThemeMode = () => {
    dispatch({
      type: mode === 'dark' ? '/themeMode/light' : '/themeMode/dark',
    });
  };

  const selected = (path: string): boolean => {
    let base = asPath;
    if (asPath.includes('#')) {
      base = base.slice(0, base.indexOf('#'));
    }

    return base === path;
  };

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
          {sidebar.map((section, index) => (
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
                  <ListItemButtonLink
                    key={item.title + index}
                    href={`/docs/${section.title}/${item.title}`}
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
                  </ListItemButtonLink>
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
              onClick={toggleThemeMode}
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
