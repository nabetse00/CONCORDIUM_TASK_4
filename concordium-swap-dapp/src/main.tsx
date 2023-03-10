import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './App'
import './index.css'

//Router
import {
  createHashRouter,
  //createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/errorPage';
import loadable from '@loadable/component';

export const base = '/' // '/CONCORDIUM_TASK_4/'
// component lazy loading

const Account = loadable(() => import('./pages/AccountInfoPage'),
  {
    resolveComponent: (components) => components.AccountInfoPage
  });
const TokenInfo = loadable(() => import('./pages/TokenAPage'),
  {
    resolveComponent: (components) => components.TokenAPage
  });
const ConcordiumSwap = loadable(() => import('./pages/SwapPage'),
  {
    resolveComponent: (components) => components.SwapPage
  });
const IndexPage = loadable(() => import('./pages/IndexPage'),
  {
    resolveComponent: (components) => components.IndexPage
  });

// Root route
const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path={base}
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={<IndexPage />}
        />
        <Route
          path={"account-info/"}
          element={<Account />}
        />
        <Route
          path="token-info/"
          element={<TokenInfo />}
        />
        <Route
          path="concordium-swap/"
          element={<ConcordiumSwap />}
        />
      </Route>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
