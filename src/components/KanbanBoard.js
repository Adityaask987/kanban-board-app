import React, { useState } from 'react';
import DisplayIcon from '../assets/Display.svg';
import AddIcon from '../assets/add.svg';
import DownIcon from '../assets/down.svg';
import GroupingOptions from './GroupingOptions';
import SortingOptions from './SortingOptions';
import TicketCard from './TicketCard';
import '../KanbanBoard.css';

const KanbanBoard = ({ tickets }) => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  // Grouping logic can be customized as needed
  const groupedTickets = groupTickets(tickets, groupBy, sortBy);

  return (
    <div className="kanban-board">
      <div className="kanban-header">
        <button className="display-button">
          <img src={DisplayIcon} alt="Display Options" />
        </button>
        <button className="add-button">
          <img src={AddIcon} alt="Add Ticket" />
        </button>
        <GroupingOptions groupBy={groupBy} setGroupBy={setGroupBy} />
        <SortingOptions sortBy={sortBy} setSortBy={setSortBy} />
        <button className="down-button">
          <img src={DownIcon} alt="More Options" />
        </button>
      </div>
      <div className="columns">
        {Object.keys(groupedTickets).map(group => (
          <div key={group} className="column">
            <h3>{group}</h3>
            {groupedTickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const groupTickets = (tickets, groupBy, sortBy) => {
  const grouped = {};

  tickets.forEach(ticket => {
    const key = ticket[groupBy] || 'No Group';
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(ticket);
  });

  Object.values(grouped).forEach(group => {
    group.sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  });

  return grouped;
};

export default KanbanBoard;
