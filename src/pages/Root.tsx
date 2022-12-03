import { CalendarPNG, DashboardPNG, InboxPNG, KanbanPNG, SettingsPNG, UserPNG } from '@assets/icons';
import Sidebar from '@presentation/organisms/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const items = [
  {
    alt: '',
    icon: DashboardPNG,
    title: 'sidebar.pages.dashboard',
    to: '/',
  },
  {
    alt: '',
    icon: KanbanPNG,
    title: 'sidebar.pages.kanban',
    to: '/',
  },
  {
    alt: '',
    icon: InboxPNG,
    title: 'sidebar.pages.inbox',
    to: '/',
  },
  {
    alt: '',
    icon: CalendarPNG,
    title: 'sidebar.pages.calendar',
    to: '/',
  },
  {
    alt: '',
    icon: UserPNG,
    title: 'sidebar.pages.user',
    to: '/',
  },
  {
    alt: '',
    icon: SettingsPNG,
    title: 'sidebar.pages.settings',
    to: '/',

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
