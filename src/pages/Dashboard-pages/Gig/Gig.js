import React from 'react';
import { useForm } from "react-hook-form";
const Gig = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    return (
        <div>
            <form className='py-10' onSubmit={handleSubmit(onSubmit)}>
                
                <input placeholder='Enter your Full name' type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"  {...register("Fullname")} />
                
                <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" {...register("education", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Gig;