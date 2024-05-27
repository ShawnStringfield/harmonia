import { Link } from 'react-router-dom';
import { Box, Flex } from '@radix-ui/themes';
import { RxTextAlignRight, RxCross1 } from 'react-icons/rx';

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/shadcn/ui/alert-dialog';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/shadcn/ui/navigation-menu';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Nav = () => {
  return (
    <>
      <Flex justify="between" align="center" py="4">
        <Box>Harmonia</Box>
        <Flex justify="end" className="sm:hidden w-3/4">
          <AlertDialog>
            <AlertDialogTrigger>
              <RxTextAlignRight size="28px" />
            </AlertDialogTrigger>
            <AlertDialogContent className="absolute top-1/4 left-2/3 -ml-4 -mt-20 w-72 rounded-md">
              <Flex>
                <AlertDialogHeader>
                  <AlertDialogTitle className="absolute top-0 right-0">
                    <AlertDialogCancel className="focus-visible:ring-transparent p-0 mr-4">
                      <RxCross1 size="18px" />
                    </AlertDialogCancel>
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter className="-mt-4">
                  {navItems.map((item, index) => (
                    <Link to={item.href} key={index}>
                      <AlertDialogAction className="p-0">{item.name}</AlertDialogAction>
                    </Link>
                  ))}
                </AlertDialogFooter>
              </Flex>
            </AlertDialogContent>
          </AlertDialog>
        </Flex>

        <Flex justify="end" className="hidden sm:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link to={item.href}>
                    <span className={navigationMenuTriggerStyle()}>{item.name}</span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </Flex>
      </Flex>
    </>
  );
};
