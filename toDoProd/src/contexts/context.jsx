import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const AppContext = createContext()

export const useGlobalContext = () => {
  return useContext(AppContext)
}

const AppProvider = ({ children }) => {
  const navigate = useNavigate()
  //UTIL METHODS

  // LOGIN AND REGISTER
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false)

  const register = async () => {
    try {
      const data = await axios.post('http://localhost:3100/register', {
        name,
        email,
        password,
      })
      setShowModal(true)
      setTimeout(() => {
        setShowModal(false)
        navigate('/login')
      }, [5000])
      console.log(data.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  const login = async () => {
    try {
      const data = await axios.post('http://localhost:3100/login', {
        email,
        password,
      })
      setShowModal(true)
      setTimeout(() => {
        setShowModal(false)
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('id', data.data.id)
        navigate('/dash')
      }, [5000])
      console.log(data.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  // TASKS

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('')
  const [tag, setTag] = useState('')

  const getAllTasks = async () => {
    try {
      const data = await axios.get('http://localhost:3100/task')
      console.log(data.data.data)

      const filteredTasks = data.data.data.filter((dat) => {
        return dat.userId._id === localStorage.getItem('id')
      })
      setTasks(filteredTasks)
    } catch (err) {
      console.log(err.message)
    }
  }

  const getTask = async (myId) => {
    try {
      const data = await axios.get(`http://localhost:3100/task/${myId}`)
      console.log(data.data.data)
      setTask(data.data.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  const createTask = async () => {
    try {
      const data = await axios.post(`http://localhost:3100/task`, {
        title,
        description,
        status,
        priority,
        category,
        tag,
        userId: localStorage.getItem('id'),
      })
      setTitle('')
      setDescription('')
      setStatus('')
      setPriority('')
      setCategory('')
      setTag('')
      console.log(data.data.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  const deleteTask = async (myId) => {
    try {
      await axios.delete(`http://localhost:3100/task/${myId}`)
      getAllTasks()
      navigate('/dash')
    } catch (err) {
      console.log(err.message)
    }
  }

  const updateTask = async (myId) => {
    const data = await axios.put(`http://localhost:3100/task/${myId}`, {
      title,
      description,
      status,
      priority,
      category,
      tag,
      userId: localStorage.getItem('id'),
    })
    setTitle('')
    setDescription('')
    setStatus('')
    setPriority('')
    setCategory('')
    setTag('')
    console.log(data.data.data)
    navigate('/dash')
  }

  // CATEGORY

  const [myCategory, setMyCategory] = useState([])
  const [categoryName, setCategoryName] = useState('')

  const getCategories = async () => {
    try {
      const data = await axios.get('http://localhost:3100/category')
      console.log(data.data.data)

      const filteredCategory = data.data.data.filter((dat) => {
        return dat.userId._id === localStorage.getItem('id')
      })
      setMyCategory(filteredCategory)
    } catch (err) {
      console.log(err.message)
    }
  }

  const createCategory = async () => {
    try {
      const data = await axios.post(`http://localhost:3100/category`, {
        name: categoryName,
        userId: localStorage.getItem('id'),
      })
      setCategoryName('')
      console.log(data.data.data)
      getCategories()
    } catch (err) {
      console.log(err.message)
    }
  }
  // TAG

  const [myTag, setMyTag] = useState([])
  const [tagName, setTagName] = useState('')

  const getTags = async () => {
    try {
      const data = await axios.get('http://localhost:3100/tag')
      console.log(data.data.data)

      const filteredTag = data.data.data.filter((dat) => {
        return dat.userId._id === localStorage.getItem('id')
      })
      setMyTag(filteredTag)
    } catch (err) {
      console.log(err.message)
    }
  }

  const createTag = async () => {
    try {
      const data = await axios.post(`http://localhost:3100/tag`, {
        name: tagName,
        userId: localStorage.getItem('id'),
      })
      setTagName('')
      console.log(data.data.data)
      getTags()
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        register,
        showModal,
        login,
        tasks,
        getAllTasks,
        getTask,
        task,
        deleteTask,
        createTask,
        getCategories,
        myCategory,
        myTag,
        getTags,
        title,
        setTitle,
        description,
        setDescription,
        status,
        setStatus,
        priority,
        setPriority,
        category,
        setCategory,
        tag,
        setTag,
        setMyCategory,
        setMyTag,
        updateTask,
        categoryName,
        setCategoryName,
        tagName,
        setTagName,
        createCategory,
        createTag,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
