import React from 'react';
import img1 from '../../asset/partner/icon-partner-1-1.png'
import img2 from '../../asset/partner/icon-partner-2-1.png'
import img3 from '../../asset/partner/icon-partner-3-1.png'
import img4 from '../../asset/partner/icon-partner-4-1.png'
const PartnerSection = () => {
    return (
        <section className="px-6 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        

  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
  </div>
      
  </section>
    );
};

export default PartnerSection;