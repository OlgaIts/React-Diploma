import {RouteProps} from "react-router-dom";
import {AboutPage} from "../../pages/AboutPage/AboutPage";
import {StartPage} from "../../pages/StartPage/StartPage";
import {NotFound} from "../../pages/NotFound";
import {ContactsPage} from "../../pages/ContactsPage";
import {CartPage} from "../../pages/CartPage";
import { CatalogPage } from "../../pages/CatalogPage";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
  CONTACTS = "contacts",
  CART = "cart",
  CATALOG = 'catalog',
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.CONTACTS]: "/contacts",
  [AppRoutes.CATALOG]: "/catalog",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    element: <StartPage />,
    path: RoutePath.home,
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: RoutePath.about,
  },
  [AppRoutes.NOT_FOUND]: {
    element: <NotFound />,
    path: RoutePath.not_found,
  },
  [AppRoutes.CONTACTS]: {
    element: <ContactsPage />,
    path: RoutePath.contacts,
  },
  [AppRoutes.CART]: {
    element: <CartPage />,
    path: RoutePath.cart,
  },
  [AppRoutes.CATALOG]: {
    element: <CatalogPage />,
    path: RoutePath.catalog,
  },
};
