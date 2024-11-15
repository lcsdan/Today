import React from 'react';
import { format, parseISO, isValid } from 'date-fns';

function TodayItem({ task, deleteTask }) {

    return (
        <div className="relative bg-custom-dark-placeholder p-4 rounded-lg mb-2 shadow">
            <div 
                onClick={deleteTask} 
                className="absolute -top-2 -right-2 cursor-pointer"
            >
                <svg width="24" height="24" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5625 51.06L34.5 38.1225L47.4375 51.06L51.06 47.4375L38.1225 34.5L51.06 21.5625L47.4375 17.94L34.5 30.8775L21.5625 17.94L17.94 21.5625L30.8775 34.5L17.94 47.4375L21.5625 51.06ZM34.5 69C29.785 69 25.3288 68.0944 21.1313 66.2831C16.9338 64.4719 13.2681 61.9994 10.1344 58.8656C7.00063 55.7319 4.52812 52.0662 2.71687 47.8688C0.905625 43.6712 0 39.215 0 34.5C0 29.7275 0.905625 25.2425 2.71687 21.045C4.52812 16.8475 7.00063 13.1963 10.1344 10.0913C13.2681 6.98625 16.9338 4.52812 21.1313 2.71687C25.3288 0.905625 29.785 0 34.5 0C39.2725 0 43.7575 0.905625 47.955 2.71687C52.1525 4.52812 55.8038 6.98625 58.9088 10.0913C62.0138 13.1963 64.4719 16.8475 66.2831 21.045C68.0944 25.2425 69 29.7275 69 34.5C69 39.215 68.0944 43.6712 66.2831 47.8688C64.4719 52.0662 62.0138 55.7319 58.9088 58.8656C55.8038 61.9994 52.1525 64.4719 47.955 66.2831C43.7575 68.0944 39.2725 69 34.5 69Z" fill="#FFA5A5"/>
                </svg>
            </div>
            <div className="w-full">
                <h4 className="font-semibold text-white">{task.name}</h4>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-custom-gray-font">{task.description}</p>
                    <p className="text-xs text-custom-gray-font ml-4" style={{ color: '#9e9e9e' }}>{task.date}</p>
                </div>
            </div>
        </div>
    );
}

export default TodayItem;
