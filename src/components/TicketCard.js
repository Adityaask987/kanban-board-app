import React from 'react';
import UrgentPriorityIcon from '../assets/SVG - Urgent Priority colour.svg';
import HighPriorityIcon from '../assets/Img - High Priority.svg';
import MediumPriorityIcon from '../assets/Img - Medium Priority.svg';
import LowPriorityIcon from '../assets/Img - Low Priority.svg';
import NoPriorityIcon from '../assets/No-priority.svg';

import ToDoIcon from '../assets/To-do.svg';
import InProgressIcon from '../assets/in-progress.svg';
import DoneIcon from '../assets/Done.svg';
import BacklogIcon from '../assets/Backlog.svg';
import CancelledIcon from '../assets/Cancelled.svg';

import MenuIcon from '../assets/3 dot menu.svg';
import '../TicketCard.css';

const priorityIcons = {
  urgent: UrgentPriorityIcon,
  high: HighPriorityIcon,
  medium: MediumPriorityIcon,
  low: LowPriorityIcon,
  nopriority: NoPriorityIcon,
};

const statusIcons = {
  todo: ToDoIcon,
  inprogress: InProgressIcon,
  done: DoneIcon,
  backlog: BacklogIcon,
  cancelled: CancelledIcon,
};

const TicketCard = ({ ticket }) => {
  const priorityLabel = ticket.priorityLabel?.toLowerCase().replace(/ /g, '');
  const statusLabel = ticket.status?.toLowerCase().replace(/ /g, '');

  const priorityIcon = priorityIcons[priorityLabel] || NoPriorityIcon;
  const statusIcon = statusIcons[statusLabel] || null;

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h4>{ticket.title}</h4>
        <img src={MenuIcon} alt="Options" className="menu-icon" />
      </div>
      <div className="ticket-icons">
        {priorityIcon && (
          <img
            src={priorityIcon}
            alt={`${priorityLabel} priority`}
            className="priority-icon"
            title={`${priorityLabel.charAt(0).toUpperCase() + priorityLabel.slice(1)} Priority`}
          />
        )}
        {statusIcon && (
          <img
            src={statusIcon}
            alt={`${statusLabel} status`}
            className="status-icon"
            title={`${statusLabel.charAt(0).toUpperCase() + statusLabel.slice(1)} Status`}
          />
        )}
      </div>
      <p>Priority: {ticket.priority}</p>
      <p>Assigned to: {ticket.user}</p>
    </div>
  );
};

export default TicketCard;
