import { MainPage } from "pages/MainPage";
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
import { TokenIssuancePage } from "pages/TokenIssuancePage";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN_PAGE = "main_page",
  SIGN_UP = "sign_up",
  SIGN_IN = "sign_in",
  METAMASK = "metamask",
  METAMASK_USERNAME = "metamask_username",
  GOOGLE = "google",
  EMAIL = "email",
  CONFIRMATION = "confirmation",
  TOKEN_ISSUANCE = "token_issuance",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_PAGE]: "/",
  [AppRoutes.SIGN_IN]: "/sign-in",
  [AppRoutes.SIGN_UP]: "/sign-up",
  [AppRoutes.METAMASK]: "/metamask",
  [AppRoutes.METAMASK_USERNAME]: "/metamask-username",
  [AppRoutes.GOOGLE]: "/google",
  [AppRoutes.EMAIL]: "/email",
  [AppRoutes.CONFIRMATION]: "/confirmation",
  [AppRoutes.TOKEN_ISSUANCE]: "/token-issuance",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN_PAGE]: {
    path: RoutePath.main_page,
    element: <MainPage />,
  },
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
  [AppRoutes.TOKEN_ISSUANCE]: {
    path: RoutePath.token_issuance,
    element: <TokenIssuancePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
