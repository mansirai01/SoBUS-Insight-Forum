// component
import Iconify from '../../premade-components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Visual Dashbaord',
    path: '/app/dashboard',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Search Contacts',
    path: '/app/SearchContact',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Blogs and Testimonials',
    path: '/app/blog',
    icon: getIcon('eva:file-text-fill'),
  },
   {
    title: 'Create Business Profile',
    path: '/app/createbiz',
    icon: getIcon('ic:baseline-add-business'),
  },
  {
    title: 'View Business Profiles',
    path: '/smallbiz',
    icon: getIcon('ant-design:fund-view-outlined'),
  },

];

export default navConfig;
