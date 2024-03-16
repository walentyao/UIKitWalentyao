import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.scss';
import { IRoute } from '../../interfaces/router.interface';
interface IProps {
    route: IRoute;
}
export const LinkSidebar = ({ route }: IProps) => {
    return (
        <li className={classes.sidebar__link}>
            <NavLink
                to={route.path}
                className={({ isActive }) =>
                    isActive ? classes.link + ' ' + classes.link_active : classes.link
                }
            >
                {route.name}
            </NavLink>
        </li>
    );
};
