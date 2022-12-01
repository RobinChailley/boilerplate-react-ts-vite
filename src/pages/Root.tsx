import { CalendarPNG, DashboardPNG, InboxPNG, KanbanPNG, SettingsPNG, UserPNG } from '@assets/icons';
import Sidebar from '@presentation/organisms/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const items = [
  {
    title: 'sidebar.pages.dashboard',
    to: '/',
    icon: DashboardPNG,
    alt: '',
  },
  {
    title: 'sidebar.pages.kanban',
    to: '/',
    icon: KanbanPNG,
    alt: '',
  },
  {
    title: 'sidebar.pages.inbox',
    to: '/',
    icon: InboxPNG,
    alt: '',
  },
  {
    title: 'sidebar.pages.calendar',
    to: '/',
    icon: CalendarPNG,
    alt: '',
  },
  {
    title: 'sidebar.pages.user',
    to: '/',
    icon: UserPNG,
    alt: '',
  },
  {
    title: 'sidebar.pages.settings',
    to: '/',
    icon: SettingsPNG,
    alt: '',
  },
];

interface RootProps {}

const classes = {
  aside: '',
  body: 'h-[100vh] pl-16 py-[5vh]',
  container: 'flex flex-row',
};

const Root: React.FC<RootProps> = () => {
  return (
    <div className={classes.container}>
      <aside className={classes.aside}>
        <Sidebar items={items} />
      </aside>
      <div className={classes.body}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
