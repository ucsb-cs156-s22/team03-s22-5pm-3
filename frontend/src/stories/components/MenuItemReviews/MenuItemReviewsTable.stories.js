import React from 'react';

import MenuItemReviewsTable from "main/components/MenuItemReviews/MenuItemReviewsTable";
import { menuItemReviewsFixtures } from 'fixtures/menuItemReviewsFixtures';

export default {
    title: 'components/MenuItemReviews/MenuItemReviewsTable',
    component: MenuItemReviewsTable
};

const Template = (args) => {
    return (
        <MenuItemReviewsTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    menuItemReviews: []
};

export const ThreeMenuItemReviews = Template.bind({});

ThreeMenuItemReviews.args = {
    menuItemReviews: menuItemReviewsFixtures.threeMenuItemReviews
};


