import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Landing from './pages/Landing.jsx'
import Container from './pages/Container.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddTask from './pages/AddTask.jsx'
import TaskDetail from './pages/TaskDetail.jsx'
import EditTask from './pages/EditTask.jsx'
import CreateCategory from './pages/CreateCategory.jsx'
import CreateTag from './pages/CreateTag.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import AppProvider from './contexts/context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/edit-task/:id' element={<EditTask />} />
        <Route path='/add-task' element={<AddTask />} />
        <Route path='/add-category' element={<CreateCategory />} />
        <Route path='/add-tag' element={<CreateTag />} />
        <Route path='/task-detail/:id' element={<TaskDetail />} />
      </Routes>
    </AppProvider>
  </BrowserRouter>
)
