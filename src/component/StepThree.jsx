import React , {useState} from 'react';
import List from "../image/list.png";
import Board from "../image/board.png";
import { useFormContext } from '../context/FormContext';


const StepThree = () => {
    const { formValues } = useFormContext();
    const [activeButton, setActiveButton] = useState(formValues.activeButton || '');

    const handleButtonClick = (buttonName) => {
        setActiveButton(activeButton === buttonName ? null : buttonName);
    }
    
    const getButtonClass = (buttonName) => {
        const baseClass = 'w-[200px] h-[200px] rounded-lg border border-gray-300 flex items-center justify-center';
        const activeClass = 'border-blue-500 border';
        const inactiveClass = 'border border-gray-300 hover:border-blue-500';

        return `${baseClass} ${activeButton === buttonName ? activeClass : inactiveClass}`;
    };

    return (
       <div  className='flex flex-col'>
         <p className='text-3xl text-center my-4'>Select a view</p>
         <p className='text-gray-500 text-center'>You can also customize this views in settings</p>
         <div className='flex flex-row sm:flex-col sm:gap-8 mt-8 mb-[9rem] items-center justify-between'>
            <button 
             className={`${getButtonClass('list')}`}
             onClick={() => handleButtonClick('list')}>
                <img src={List} alt="..." />
            </button>
            <button 
             className={`${getButtonClass('board')}`}
             onClick={() => handleButtonClick('board')}>
                <img src={Board} alt="..." />
            </button>
         </div>
       </div>
    )
}

export default StepThree;
