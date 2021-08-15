import React from 'react';

const CounterAppOne = React.lazy(() => import('../views/CounterAppOne'));
const DummyPage = React.lazy(() => import('../views/DummyPage'));
const Referral = React.lazy(() => import('../views/Referral'));
const AddUser = React.lazy(() => import('../views/ManageUser/AddUser'));

const routes = [
  {
    path: '/app1/home',
    component: CounterAppOne,
    exact: false,
    name: 'Counter App One',
  },
  {
    path: '/app1/page-2',
    component: DummyPage,
    exact: false,
    name: 'Dummy Page',
  },
  {
    path: '/app1/referral',
    component: Referral,
    exact: false,
    name: 'Referral',
  },
  {
    path: '/app1/manage-user',
    component: AddUser,
    exact: false,
    name: 'Manage User',
  },
];

export default routes;
