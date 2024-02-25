export const isParentActive = (children, path) => {
    if (!children || !Array.isArray(children) || !path) {
        return false;
    }

    return children.some((item) => {
        if (!item) {
            return false;
        }

        if (item.path === path) {
            return true;
        }

        if (item.subMenu && Array.isArray(item.subMenu)) {
            return item.subMenu.some((subItem) => subItem.path === path);
        }

        return false;
    });
};
