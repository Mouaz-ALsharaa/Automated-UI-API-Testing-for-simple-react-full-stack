import React, { useEffect, useState } from 'react';

const Dashboard = ({ onLogout }) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const handleAdd = async () => {
    if (!value) return;
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value })
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
    setValue('');
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setValue(item.value);
  };

  const handleEdit = async () => {
    const res = await fetch(`/api/items/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value })
    });
    const updated = await res.json();
    setItems(items.map(i => (i.id === editId ? updated : i)));
    setEditId(null);
    setValue('');
  };

  const handleDelete = async (id) => {
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">dashboard</h2>
        <button className="btn btn-danger mb-3" onClick={onLogout} id='logout'>Logout</button>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id='inputValue'
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
          />
          <button
            className={`btn ${editId ? 'btn-warning' : 'btn-primary'}`}
            id={editId ? 'Edit' : 'Add'}
            disabled={!value}
            onClick={editId ? handleEdit : handleAdd}
          >
            {editId ? 'Edit' : 'Add'}
          </button>
        </div>
        <ul className="list-group">
          {items.map(item => (
            <li key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center">
              {item.value}
              <div>
                <button className="btn btn-sm btn-info me-2" id='Edit' onClick={() => startEdit(item)}>Edit</button>
                <button className="btn btn-sm btn-danger" id='Delete' onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;