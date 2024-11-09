import React from 'react';
import { useForm } from 'react-hook-form';

function TodayForm({ addTask }) {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const taskWithDate = {
            ...data,
            date: new Date().toLocaleString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }),
        };
        addTask(taskWithDate);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-custom-dark-soft p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-white">Add new to do</h3>
            <div className="mb-4">
                <label className="block text-sm text-custom-gray-font mb-1" htmlFor="name">Task Name :</label>
                <input 
                    {...register("name", { required: true })}
                    id="name"
                    placeholder="Placeholder..."
                    className="w-full p-2 rounded bg-custom-dark-placeholder text-white border border-gray-600 focus:outline-none focus:border-gray-400"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm text-custom-gray-font mb-1" htmlFor="description">Task Description :</label>
                <input 
                    {...register("description")}
                    id="description"
                    placeholder="Placeholder..."
                    className="w-full p-2 rounded bg-custom-dark-placeholder text-white border border-gray-600 focus:outline-none focus:border-gray-400"
                />
            </div>
            <button type="submit" className="bg-white text-gray-800 py-2 px-4 rounded w-full font-semibold hover:bg-gray-200 transition">
                Create Todo
            </button>
        </form>
    );
}

export default TodayForm;
