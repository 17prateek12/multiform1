import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { useFormContext } from '../context/FormContext';



const StepFour = () => {

    const { formValues } = useFormContext();
    const [activeButton, setActiveButton] = useState(formValues.activeButton || '');

    const handleButtonClick = (buttonName) => {
        setActiveButton(activeButton === buttonName ? null : buttonName);
    }

    const getButtonClass = (buttonName) => {
        const baseClass = 'w-full h-[5rem] sm:h-auto sm:py-2 sm:pl-2 bg-gray-100 border border-gray-300 rounded-lg';
        const activeClass = 'border-blue-500 border';
        const inactiveClass = 'border border-gray-300 hover:border-blue-500';

        return `${baseClass} ${activeButton === buttonName ? activeClass : inactiveClass}`;
    };

    return (
        <div className='flex flex-col'>
            <p className='text-3xl text-center my-4'>Who can manage projects</p>
            <p className='text-gray-500 text-center'>Don't panic - you can also customize this permissions in settings</p>
            <div className='mt-8 mb-16 flex flex-col gap-6'>
                <button className={`${getButtonClass('everyone')}`}
                    onClick={() => handleButtonClick('everyone')}>
                    <div className='flex items-center'>
                        <div className='w-1/5 flex items-start justify-center gap-1'>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='w-2 h-2 bg-gray-100 border border-gray-400 rounded-[50%]'></span>
                                <span className='w-1 h-10 rounded-lg bg-gray-100 border border-gray-400'> </span>
                            </div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='w-2 h-2 bg-gray-100 border border-gray-400 rounded-[50%]'></span>
                                <span className='w-1 h-8 rounded-lg bg-gray-100 border border-gray-400'> </span>
                            </div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='w-2 h-2 bg-gray-100 border border-gray-400 rounded-[50%]'></span>
                                <span className='w-1 h-6 rounded-lg bg-gray-100 border border-gray-400'> </span>
                            </div>
                        </div>
                        <div className='w-4/5 flex flex-col items-start mr-20 ml-4'>
                            <p className='text-base'>Everyone</p>
                            <p className='text-[14px] text-gray-400 text-wrap text-left'>All user can now to see it, but guest cannot access the project</p>
                        </div>
                    </div>
                </button>
                <button className={`${getButtonClass('admin')}`}
                    onClick={() => handleButtonClick('admin')}>
                    <div className='flex items-center'>
                        <div className='w-1/5 flex items-start justify-center'>
                            <FaRegUserCircle className='text-[28px] text-gray-400' />
                        </div>
                        <div className='w-4/5 flex flex-col items-start mr-20 ml-4'>
                            <p className='text-base'>Only Admin's</p>
                            <p className='text-[14px] text-gray-400 text-wrap text-left'>Only Admins can manage everything</p>
                        </div>
                    </div>
                </button>
                <button className={`${getButtonClass('person')}`}
                    onClick={() => handleButtonClick('person')}>
                    <div className='flex items-center'>
                        <div className='w-1/5 flex items-start justify-center gap-1'>
                            <FiUsers className='text-[28px] text-gray-400' />
                        </div>
                        <div className='w-4/5 flex flex-col items-start mr-20 ml-4'>
                            <p className='text-base'>Only to specific people</p>
                            <p className='text-[14px] text-gray-400 text-wrap text-left'>Only some specific people can able to see it</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default StepFour;
