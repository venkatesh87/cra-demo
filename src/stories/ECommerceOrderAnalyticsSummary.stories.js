import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import React from 'react';
import OrderAnalyticsSummary from '../routes/Dashboards/ECommerce/OrderAnalyticsSummary';

export default {
  title: 'ECommerce OrderAnalyticsSummary',
  component: OrderAnalyticsSummary,
  decorators: [withKnobs, withA11y],
};
export const Default = () => <OrderAnalyticsSummary />;
