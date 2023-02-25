import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './App'
import './index.css'

//Router
import {
  createHashRouter,
  createBrowserRouter,
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
const ContractData = loadable(() => import('./pages/ContractDataPage'),
  {
    resolveComponent: (components) => components.ContractDataPage
  });
  const BecomeTheRichest = loadable(() => import('./pages/BecomeTheRichestPage'),
  {
    resolveComponent: (components) => components.BecomeTheRichestPage
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
          path="contract/"
          element={<ContractData />}
        />

        <Route
          path="become-the-richest/"
          element={<BecomeTheRichest/>}
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
