import React from 'react';
import {FieldError, UseFormRegisterReturn} from 'react-hook-form';

type InputFieldProps = {
    id: string;
    label: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
};

const InputField: React.FC<InputFieldProps> = ({
    id,
    label,
    register,
    error
}) => {
    return(
        <div className='flex flex-col'>

            <label 
                htmlFor={id}
                className="text-white font-chocolates font-semibold mb-1 text-[20px] sm:text-[22px] md:text-[24px]"
            >
                {label}
            </label>

            <input 
                id = {id}
                type="text" 
                {...register}
                className='text-white p-2 sm:p-3 rounded-md border-[2px] border-[#D9D9D9] focus:outline-none bg-[#3B76BB1A] hover:bg-[#3B76BB66] text-[14px] sm:text-[16px]'
             />
             {error && (
                <span className='text-white text-sm mt-1'>{error.message}</span>
             )}
        </div>
    );
};

export default InputField;
