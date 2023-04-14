import { NotFoundPage } from "pages/NotFoundPage";
import { SignInPage } from "pages/SignInPage";
import {
  ConfirmationPage,
  EmailPage,
  GooglePage,
  MetamaskPage,
  MetamaskUsernamePage,
  SignUpPage,
} from "pages/SignUpPage";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  SIGN_UP = "sign_up",
  SIGN_IN = "sign_in",
  METAMASK = "metamask",
  METAMASK_USERNAME = "metamask_username",
  GOOGLE = "google",
  EMAIL = "email",
  CONFIRMATION = "confirmation",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.SIGN_IN]: "/sign-in",
  [AppRoutes.SIGN_UP]: "/sign-up",
  [AppRoutes.METAMASK]: "/metamask",
  [AppRoutes.METAMASK_USERNAME]: "/metamask-username",
  [AppRoutes.GOOGLE]: "/google",
  [AppRoutes.EMAIL]: "/email",
  [AppRoutes.CONFIRMATION]: "/confirmation",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.SIGN_UP]: {
    path: RoutePath.sign_up,
    element: <SignUpPage />,
  },
  [AppRoutes.SIGN_IN]: {
    path: RoutePath.sign_in,
    element: <SignInPage />,
  },
  [AppRoutes.METAMASK]: {
    path: RoutePath.metamask,
    element: <MetamaskPage />,
  },
  [AppRoutes.METAMASK_USERNAME]: {
    path: RoutePath.metamask_username,
    element: <MetamaskUsernamePage />,
  },
  [AppRoutes.GOOGLE]: {
    path: RoutePath.google,
    element: <GooglePage />,
  },
  [AppRoutes.EMAIL]: {
    path: RoutePath.email,
    element: <EmailPage />,
  },
  [AppRoutes.CONFIRMATION]: {
    path: RoutePath.confirmation,
    element: <ConfirmationPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};