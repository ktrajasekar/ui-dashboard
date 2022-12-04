// assets
import { DashboardOutlined, LoginOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    LoginOutlined
};
// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.DashboardOutlined,
            breadcrumbs: true
        },
        {
            id: 'api-calls',
            title: 'API Redux Toolkit',
            type: 'item',
            url: '/api',
            icon: icons.LoginOutlined,
            breadcrumbs: false
        },
        {
            id: 'api-display',
            title: 'Display API from State',
            type: 'item',
            url: '/api-display',
            icon: icons.LoginOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
