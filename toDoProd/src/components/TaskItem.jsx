const TaskItem = (props) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <h1>Task 1: {props.title}</h1>
        <h1>Status : {props.status}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>Due:{props.due}</h1>
        <h1>Priority: {props.priority}</h1>
      </div>
      <div className='divider'></div>
    </div>
  )
}
export default TaskItem
