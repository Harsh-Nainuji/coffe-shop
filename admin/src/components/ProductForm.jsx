import React, { useState, useEffect } from 'react';
import adminApi from '../services/adminApi';

export default function ProductForm({ editingProduct, onSaved }) {
  const [form, setForm] = useState({ name:'', price:'', shortDesc:'', longDesc:'', stock:'' });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name,
        price: editingProduct.price,
        shortDesc: editingProduct.shortDesc,
        longDesc: editingProduct.longDesc,
        stock: editingProduct.stock
      });
    }
  }, [editingProduct]);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([k,v]) => data.append(k, v));
    if (imageFile) data.append('image', imageFile);

    if (editingProduct) {
      await adminApi.put(`/products/${editingProduct._id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } else {
      await adminApi.post('/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
    onSaved();
    setForm({ name:'', price:'', shortDesc:'', longDesc:'', stock:'' });
    setImageFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-6 space-y-4 bg-white rounded shadow">
      {['name','price','shortDesc','longDesc','stock'].map(field => (
        <input
          key={field}
          name={field}
          type={field==='price'||field==='stock'?'number':'text'}
          placeholder={field}
          className="w-full p-2 border rounded"
          value={form[field]}
          onChange={e=>setForm({...form,[field]:e.target.value})}
          required
        />
      ))}
      <input
        type="file"
        accept="image/*"
        className="w-full p-2 border rounded"
        onChange={e=>setImageFile(e.target.files[0])}
        required={!editingProduct}
      />
      <button className="btn btn-primary">
        {editingProduct ? 'Update':'Add'} Product
      </button>
    </form>
  );
}
