import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './App'
import './index.css'

//Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/errorPage';
import loadable from '@loadable/component';

export const base = '/CONCORDIUM_TASK_4/'
// component lazy loading

const Account = loadable(() => import('./pages/AccountInfoPage'),
  {
    resolveComponent: (components) => components.AccountInfoPage
  });
const ContractInfo = loadable(() => import('./pages/ContractInfoPage'),
  {
    resolveComponent: (components) => components.ContractInfoPage
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
const router = createBrowserRouter(
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
          path="contract-info/"
          element={<ContractInfo />}
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
