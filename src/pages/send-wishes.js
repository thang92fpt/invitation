import React from 'react';

import MainLayout from '@components/Layout';
import SendWishes from '@components/WishesSection/SendWishes';
import { styWrapper } from '@components/WishesSection/SendWishes/styles';

function SendWishesWrapper() {
  return (
    <MainLayout>
      <div css={styWrapper}>{<SendWishes />}</div>
    </MainLayout>
  );
}

export default SendWishesWrapper;
