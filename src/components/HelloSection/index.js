import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-dinda-2.jpg';
import Groom from '@assets/images/p-indra.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '11 September 2022, Baleendah, Bandung' : 'Minggu, 11 September 2022';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Assalamualaikum Wr. Wb</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah SAW untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                keberkahan.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Arini Dewi Al-Faaz</h3>
                <p className="parent-name parent-name__top">
                  Putri Bapak Romli Hidayat <br />& Ibu Siti Zainah Zakiyah (Ipih)
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Miftahussalam</h3>
                <p className="parent-name">
                  Putra Bapak Atang <br />& Ibu Manah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Seputar Covid-19</h2>
                <p className="info">
                  Berkaitan dengan kondisi pandemik saat ini, keberlangsungan acara kami mengacu pada pedoman
                  Kementerian Kesehatan, yaitu memberlakukan protokol kesehatan dan pembatasan jumlah tamu undangan.
                </p>
                <p className="info">
                  Maka dari itu, dengan segala kerendahan hati, kami mohon maaf apabila belum bisa mengundang saudara/i
                  di hari bahagia kami. Sekiranya do'a dari saudara/i sudah lebih dari cukup bagi kami. Semoga kita semua
                  selalu dalam lindungan Allah SWT. Aamiin ya rabbal alamiin..
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
