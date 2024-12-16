import { useRef, useState } from "react"


export const NewTasks = ({onAdd}: TaskProps) => {
  const [enteredTask, setEnteredTask] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(event.target.value);
  }

  const handleClick = () => {
    if (onAdd) {
      onAdd(enteredTask); 
    }
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask} />
        <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>할 일 추가</button>
    </div>
  )
}
