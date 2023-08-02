import React from 'react';
import  twigaImage  from "../assets/twiga.jpeg";

const PackageCard = () => {
    return (
        <div className='flex flex-col rounded'>
            <div>
                <img src={twigaImage} alt="" className='w-full h-full rounded' />
            </div>
            <div>
                <div>
                    <h1 className='text-lg px-2 py-2 text-left font-bold'>
                        4 - Days Serengeti National Park
                    </h1>
                </div>
                <div className='flex flex-row justify-between px-2'>
                    <div className='text-lg font-bold'>
                        $1,000
                    </div>
                    <div>
                        <button className='p-2 bg-green-500 rounded'>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PackageCard;