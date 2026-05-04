import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/Home"));
const CarDetailPage = lazy(() => import("@/pages/CarDetail"));

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense
        fallback={
          <div className="container max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: intentional skeleton
              <Skeleton key={i} className="h-48 rounded-2xl" />
            ))}
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

type HomeSearch = { country?: string };

function validateHomeSearch(search: Record<string, unknown>): HomeSearch {
  return {
    country: typeof search.country === "string" ? search.country : undefined,
  };
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: validateHomeSearch,
  component: HomePage,
});

const carDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/$carId",
  component: CarDetailPage,
});

const routeTree = rootRoute.addChildren([indexRoute, carDetailRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
