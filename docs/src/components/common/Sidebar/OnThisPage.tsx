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
export interface OnThisPageProps {}

const OnThisPage: FC<OnThisPageProps> = () => {
  return (
    <Box
      sx={({}) => ({
        height: '100vh',
        top: 0,
        right: 0,
        minWidth: '17rem',
        maxWidth: '17rem',
        position: 'fixed',
      })}
    >
      <AppBarSpacer />
      <Box
        sx={({ spacing }) => ({
          display: 'flex',
          flexDirection: 'column',
          height: '91%',
          justifyContent: 'space-between',
          p: spacing(2, 1),
        })}
      >
        <BodyOne>On this page</BodyOne>
      </Box>
    </Box>
  );
};

export default OnThisPage;
