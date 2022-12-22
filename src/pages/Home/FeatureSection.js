import React from 'react';
import mission from '../../asset/moto_1_1.png'
import vision from '../../asset/moto_1_2.png'
import goal from '../../asset/moto_1_3.png'

const FeatureSection = () => {
    const features = [
        {
            title:"Our Mission",
            icon:mission,
            details:'Our mission is to provide an environment for growth in teaching and learning in an effort to best support our students, faculty and staff.'
        },
        {
            title:"Our Vision",
            icon:vision,
            details:'Campus inspires community engagement and inclusive learning environments through the use of emerging technologies.'
        },
        {
            title:"Our Goal",
            icon:goal,
            details:'Enhance the quality of learning and teaching. Improve user-accessibility and time flexibility to engage in the learning process.'
        },
    ]
    return (
        <div>
            <div className="relative grid gap-5 sm:grid-cols-2 md:grid-cols-4">
                <div></div>
                {
                    features.map((e,i)=> <div key={i} className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                      <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-100 capitalize">
                        <img src={e.icon} alt="" />
                      </div>
                      <p className="mb-2 font-bold text-xl">{e.title}</p>
                      <p className="text-sm leading-5 text-gray-700">
                       {e.details}
                      </p>
                    </div>
              
                  </div>)
                }
           
            </div>
        </div>
    );
};

export default FeatureSection;