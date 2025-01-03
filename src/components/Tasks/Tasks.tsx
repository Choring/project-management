import { NewTasks } from "./NewTasks"

export const Tasks = ({tasks, onAdd, onDelete}: TaskProps) => {
  return (
    <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTasks onAdd={onAdd} />
        {tasks?.length === 0 && (
          <p className="text-stone-800 my-4">
            This project does not have any tasks yet.
          </p>
        )}
        {tasks && tasks.length > 0 && 
          <ul>
            {tasks?.map((task) => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button 
                  className="text-stone-700 hover:text-red-500" 
                  onClick={() => onDelete(task.id)}>
                    Clear
                </button>
              </li>
            ))}
          </ul>
        }
    </section>
  )
}
