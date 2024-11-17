import React from 'react';

const GroupingOptions = ({ groupBy, setGroupBy }) => {
  return (
    <div className="grouping-options">
      <label>Group By:</label>
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default GroupingOptions;
