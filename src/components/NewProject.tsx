import { useRef } from "react"
import { Input } from "./Input"
import { Modal } from "./Modal";
interface Props {
  onAdd: ({ title, description, dueDate }: ProjectData) => void;
  onCancel: () => void;
}

export const NewProject = ({ onAdd, onCancel }: Props) => {
  const modal = useRef<ModalHandle | null >(null);

  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const enteredTitle = title.current?.value || "";
    const enteredDescription = description.current?.value || "";
    const enteredDueDate = dueDate.current?.value || null;

    // 유효성 검사
    if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate?.trim() === "") {
      modal.current?.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })

  }

    return (
      <>
        <Modal ref={modal} buttonCaption="Close" >
          <h2 className="text-xl font-bold text-stone-700 mt-4">유효하지 않은 입력입니다.</h2>
          <p className="text-stone-600 mb-4">값을 입력하지 않으신 것 같아요.</p>
          <p className="text-stone-600 mb-4">모든 입력 필드에 유효한 값을 입력했는지 확인해 주세요.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
          <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>취소</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">저장</button></li>
          </menu>
          <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="Due Date" />
          </div>
        </div>

      </>
    )
}
