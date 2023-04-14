import { Suspense, memo, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

  return (
    <BrowserRouter>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </BrowserRouter>
  );
}

export default memo(AppRouter);
