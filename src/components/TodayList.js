import React from 'react';
import TodayItem from './TodayItem';

function TodayList({ tasks, deleteTask }) {
    return (
        <div className="bg-custom-dark-soft p-4 rounded-lg overflow-y-auto" style={{ maxHeight: '400px' }}>
            <h3 className="text-lg font-semibold mb-2">To do</h3>
            {tasks.map((task, index) => (
                <TodayItem key={index} task={task} deleteTask={() => deleteTask(index)} />
            ))}
        </div>
    );
}

export default TodayList;
