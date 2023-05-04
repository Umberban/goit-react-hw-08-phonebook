import { GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {AppBar} from 'components/AppBar/AppBar';

export const Backdrop = () => {
  return (
    <>
    <GridItem pl="1" bg="purple.200" area={'header'}>
    <AppBar />
    </GridItem>
    <Suspense fallback={null}>
      <Outlet />
      </Suspense>
    </>
  );
};
