import '@testing-library/jest-dom';

jest.spyOn(console, 'error').mockImplementation();
jest.spyOn(console, 'log').mockImplementation();

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/test',
  }),
  useRouteError: () => 'error',
  NavLink: () => null,
  Outlet: () => null,
}));
