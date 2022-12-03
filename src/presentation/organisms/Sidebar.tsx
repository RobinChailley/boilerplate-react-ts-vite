import { useConfig } from '@context/ConfigurationContext';
import Button from '@presentation/atoms/Button';
import SidebarLink from '@presentation/atoms/SidebarLink';
import ClosableCard from '@presentation/molecules/ClosableCard';
import React from 'react';

interface SidebarProps {
  items: {
    alt: string;
    icon: string;
    title: string;
    to: string;
  }[];
}

const classes = {
  beta: 'rounded-md bg-orange-200 text-orange-900 font-semibold w-min px-2',
  container:
    'organism w-64 h-[90vh] mt-[5vh] ml-4 bg-gray-800 p-4 rounded-md flex flex-col justify-between',
  ctaContainer: 'bg-blue-900 rounded-md p-4',
  ctaText: 'pt-8 text-blue-400 text-sm',
  listContainer: 'space-y-4',
  logout: 'w-full bg-blue-700 rounded-md p-2 text-blue-200',
  logoutContainer: 'w-full',
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const { iLogout } = useConfig();

  return (
    <div className={classes.container}>
      <div>
        <ul className={classes.listContainer}>
          {items.map((item, index) => (
            <SidebarLink
              key={`${item.title}${index}`}
              alt={item.alt}
              icon={item.icon}
              title={item.title}
              to={item.to}
            />
          ))}
        </ul>
        <ClosableCard
          id={'closable-card'}
          badgeText={'sidebar.card.badge'}
          text={'sidebar.card.text'}
          ctaText={'sidebar.card.cta'}
          ctaHref={'#'}
        />
      </div>
      <div className={classes.logoutContainer}>
        <Button onClick={iLogout.execute} text={'sidebar.logout'} />
      </div>
    </div>
  );
};

export default Sidebar;
