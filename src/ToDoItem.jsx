import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './style.css';

const ToDoItem = (props) => {
  // Handle the Edit action
  const handleEdit = () => {
    // Call the edit function passed via props
    props.onEdit(props.id);
  };

  // Handle the Delete action
  const handleDelete = () => {
    // Call the delete function passed via props
    props.onDelete(props.id);
  };

  return (
    <div className="ToDoItem">
      <input type="checkbox" />
      <div className='ItemContent'>
        <p className='Title'>{props.title}</p>
        <p className='DueDate'>{props.dueDate}</p>
      </div>
      <div className='Action1'>
        <EditOutlined  style={{ cursor: 'pointer' }} />
      </div>
      <div className='Action2'>
        <DeleteOutlined  style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
}

export default ToDoItem;