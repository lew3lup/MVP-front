import { Suspense, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "shared/ui";
import { AppRouteProps, routeConfig } from "../config/routeConfig";

function AppRouter() {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={/*route.authOnly ? <RequireAuth>{element}</RequireAuth> :*/ element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}

export default memo(AppRouter);
