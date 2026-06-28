import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Kişisel');
  const [filter, setFilter] = useState('Tümü');

  const API_URL = 'http://localhost:8080/api/tasks';

  // API'den tüm görevleri yükle
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Görevler yüklenirken hata oluştu:', error);
    }
  };

  // Yeni görev ekle
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title,
      description,
      category,
      completed: false
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        fetchTasks(); // Listeyi güncelle
      }
    } catch (error) {
      console.error('Görev eklenirken hata oluştu:', error);
    }
  };

  // Görev durumunu güncelle (Tamamlandı/Tamamlanmadı)
  const toggleComplete = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };

    try {
      const response = await fetch(`${API_URL}/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Görev güncellenirken hata oluştu:', error);
    }
  };

  // Görevi sil
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Görev silinirken hata oluştu:', error);
    }
  };

  // Filtrelenmiş görevleri hesapla
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Tümü') return true;
    return task.category === filter;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📋 Kişisel Görev Yöneticisi</h1>
        <p>Spring Boot & React Full-Stack Uygulaması</p>
      </header>

      <div className="main-content">
        {/* Görev Ekleme Formu */}
        <div className="form-card">
          <h2>Yeni Görev Ekle</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Görev Başlığı *</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Örn: React çalışılacak..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="desc">Açıklama</label>
              <textarea
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Görev detayları..."
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Kategori</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Kişisel">Kişisel</option>
                <option value="İş">İş</option>
                <option value="Eğitim">Eğitim</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>

            <button type="submit" className="btn-primary">Görev Ekle</button>
          </form>
        </div>

        {/* Görev Listesi Kartı */}
        <div className="list-card">
          <div className="list-header">
            <h2>Görevlerim</h2>
            {/* Kategori Filtresi */}
            <div className="filter-group">
              <button
                className={`btn-filter ${filter === 'Tümü' ? 'active' : ''}`}
                onClick={() => setFilter('Tümü')}
              >
                Tümü
              </button>
              <button
                className={`btn-filter ${filter === 'Kişisel' ? 'active' : ''}`}
                onClick={() => setFilter('Kişisel')}
              >
                Kişisel
              </button>
              <button
                className={`btn-filter ${filter === 'İş' ? 'active' : ''}`}
                onClick={() => setFilter('İş')}
              >
                İş
              </button>
              <button
                className={`btn-filter ${filter === 'Eğitim' ? 'active' : ''}`}
                onClick={() => setFilter('Eğitim')}
              >
                Eğitim
              </button>
            </div>
          </div>

          {filteredTasks.length === 0 ? (
            <p className="no-tasks">Henüz bu kategoride görev bulunmuyor.</p>
          ) : (
            <div className="task-list">
              {filteredTasks.map((task) => (
                <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <div className="task-info">
                    <div className="task-title-row">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task)}
                      />
                      <span className="task-title">{task.title}</span>
                      <span className={`tag tag-${task.category.toLowerCase()}`}>
                        {task.category}
                      </span>
                    </div>
                    {task.description && <p className="task-desc">{task.description}</p>}
                  </div>
                  <button onClick={() => deleteTask(task.id)} className="btn-delete">
                    Sil
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
