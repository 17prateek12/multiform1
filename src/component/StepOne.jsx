import React, { useState, useEffect } from 'react';
import { useFormContext } from '../context/FormContext';
import { FaPlus } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StepOne = () => {
  const { formValues } = useFormContext();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectName, setProjectName] = useState(formValues.projectName || '');
  const [client, setClient] = useState(formValues.client || '');
  const [newClient, setNewClient] = useState(formValues.newClient || '');
  const [notes, setNotes] = useState(formValues.notes || '');

  useEffect(() => {
    if (formValues.startDate) setStartDate(new Date(formValues.startDate));
    if (formValues.endDate) setEndDate(new Date(formValues.endDate));
  }, [formValues]);

  return (
      <div className='flex flex-col'>
        <p className='text-3xl text-center my-4'>Create a project</p>
        <div className='flex flex-col gap-4 my-4'>
          <label className='text-lg'>Project name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder='Enter project name here'
            className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none'
          />
        </div>
        <div className='flex flex-col gap-4 my-4'>
          <label className='text-lg'>Client</label>
          <div className='flex flex-row sm:flex-col items-center sm:items-start sm:gap-2 justify-between w-full'>
            <div>
            <select
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none'
            >
              <option>Select a client</option>
              <option>abc</option>
              <option>xyz</option>
              <option>efg</option>
            </select>
            </div>
            <div>
            <p className='text-xl'>Or</p>
            </div>
            <div className='flex relative'>
              <FaPlus className='absolute ml-2 text-gray-300 mt-3' />
              <input
                type="text"
                value={newClient}
                onChange={(e) => setNewClient(e.target.value)}
                placeholder='New Client'
                className='pl-8 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 my-4'>
          <label className='text-lg'>Dates</label>
          <div className='flex flex-wrap justify-between w-full gap-4'>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none'
            />
            <DatePicker
              showIcon
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none'
            />
          </div>
        </div>
        <div className='flex flex-col gap-4 my-4'>
          <label className='text-lg'>Notes</label>
          <textarea
            className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none'
            rows="5"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder='Optional'
          ></textarea>
        </div>
      </div>
  );
};

export default StepOne;
