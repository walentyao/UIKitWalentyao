import { routes } from '../../constant/routes.constant';
import { LinkSidebar } from './LinkSidebar';
import classes from './Sidebar.module.scss';
export const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <h3 className={classes.sidebar__title}>UI kit components</h3>
            <ul className={classes.sidebar__links}>
                {routes.map((route) => (
                    <LinkSidebar key={route.path} route={route} />
                ))}
            </ul>
        </aside>
    );
};
