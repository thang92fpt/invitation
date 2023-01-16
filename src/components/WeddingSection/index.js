import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Thông tin về lễ nạp tài và tân hôn</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <WeddingInfoBox
                title="Lễ nạp tài"
                time="08:00"
                date="Ngày 10 tháng 3 năm 2023"
                description="Đông Sơn, Bỉm Sơn, Thanh Hóa"
            />
            <WeddingInfoBox
              title="Lễ thành hôn và Vu quy"
              time="10:00"
              date="Ngày 10 tháng 3 năm 2023"
              description="Ba Đình, Bỉm Sơn, Thanh Hóa"
            />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
