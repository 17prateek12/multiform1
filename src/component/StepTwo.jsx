import React, { useState} from 'react';
import { useFormContext } from '../context/FormContext';
import { MdCurrencyRupee } from "react-icons/md";


const StepTwo = () => {
    const { formValues } = useFormContext();
    const [activeButton, setActiveButton] = useState(formValues.activeButton || '');
    const [bill, setBill] = useState(formValues.bill || '');
    const [rate, setRate] = useState(formValues.rate || '');
    const [buget, setBuget] = useState(formValues.buget || '');
    const [checkone, setCheckone] = useState(formValues.checkone || '');
    const [checktwo, setChecktwo] = useState(formValues.checktwo || '');
    const [percent, setPercent] = useState(formValues.percent || '');

    const handleButtonClick = (buttonName) => {
        setActiveButton(activeButton === buttonName ? null : buttonName);
    };

    const getButtonClass = (buttonName) => {
        const baseClass = 'h-[2rem] w-[160px] flex justify-center items-center';
        const activeClass = 'bg-blue-500 text-white';
        const inactiveClass = 'bg-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white';

        return `${baseClass} ${activeButton === buttonName ? activeClass : inactiveClass}`;
    };

    return (
        <div className='flex flex-col'>
            <p className='text-3xl text-center my-4'>Project type</p>
            <p className='text-gray-500 text-center'>Don't panic - You can also customize this type in settings</p>
            <div className='flex flex-row sm:flex-col items-center sm:gap-4 my-4'>
                <button
                    className={`${getButtonClass('timeAndMaterial')} rounded-tl-lg rounded-bl-lg sm:rounded-lg`}
                    onClick={() => handleButtonClick('timeAndMaterial')}
                >
                    Time & Material
                </button>
                <button
                    className={`${getButtonClass('fixedFee')} sm:rounded-lg`}
                    onClick={() => handleButtonClick('fixedFee')}
                >
                    Fixed Fee
                </button>
                <button
                    className={`${getButtonClass('nonBillable')} rounded-tr-lg rounded-br-lg sm:rounded-lg`}
                    onClick={() => handleButtonClick('nonBillable')}
                >
                    Non-Billable
                </button>
            </div>
            <div className='my-4 flex flex-col items-start'>
                <label>Hourly</label>
                <label className='text-[12px] text-gray-500'>We need hourly rates to track your project's billable amount</label>
                <div className='flex flex-row sm:flex-col items-center sm:items-start sm:gap-2 justify-start gap-4 mt-4 w-full'>
                    <select
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                        className='border border-gray-300 w-[260px] rounded-lg px-3 py-2 focus:outline-none'>
                        <option>Project Hourly Rate</option>
                    </select>
                    <div className='flex relative'>
                        <MdCurrencyRupee className='absolute ml-2 text-gray-300 mt-3' />
                        < input
                            type="text"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            placeholder='Price'
                            className='pl-8 border  w-[160px] border-gray-300 rounded-lg px-3 py-2 focus:outline-none' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col my-4 items-start'>
                <label>Budget</label>
                <label className='text-[12px] text-gray-500'>We need hourly rates to track your project's billable amount</label>
                <select
                    value={buget}
                    onChange={(e) => setBuget(e.target.value)}
                    className='border border-gray-300 w-[260px] mt-4 rounded-lg px-3 py-2 focus:outline-none'>
                    <option>Hours per Person</option>
                </select>
                <div className='flex gap-2 mt-4'>
                    <input
                        type='checkbox'
                        value={checkone}
                        onChange={(e) => setCheckone(e.target.value)} />
                    <label>Budget resets every month</label>
                </div>
                <div className='flex gap-2 mt-4 items-center'>
                    <input
                        type='checkbox'
                        value={checktwo}
                        onChange={(e) => setChecktwo(e.target.value)} />
                    <label>Send email alerts if project exceeds
                        <input
                            type="text"
                            value={percent}
                            onChange={(e) => setPercent(e.target.value)}
                            className='w-[50px] h-[30px] mx-2 pl-2 focus:outline-none border border-gray-300 rounded-lg' />
                        % of Budget
                    </label>
                </div>
            </div>
        </div>
    )
}

export default StepTwo;
