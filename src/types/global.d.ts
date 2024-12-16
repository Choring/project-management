export {};

declare global {
    // interface 이름 {} or type 이름 = {}
    interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
        label: string;
        textarea?: string | boolean;
    }

    type ButtonProps = {
        children: string;
        onClick?: () => void;
    }

    interface StartedProjectProps {
        onStartAddProject: () => void;
        projects?:ProjectData[];
        onSelectProject?: (id) => void;
        selectedProjectId?: number

    }

    type ProjectState = {
        selectedProjectId: string | null | undefined;
        projects: Array<Project>;
        tasks: TasksProps[];
    }

    interface ProjectData {
        id?: number;
        title: string | undefined,
        description: string | undefined;
        dueDate: Date | string | null;
    }

    interface ModalProps {
        children: React.ReactNode;
        buttonCaption: string
    }
    interface ModalHandle {
        open: () => void;
    }

    type TasksProps = {
        id: number;
        text: string;
    }

    interface SelectProjectProps {
        tasks:TasksProps[];
        project: ProjectData;
        onDelete: () => void;
        onAddTask: (text:string) => void;
        onDeleteTask: () => void;
    }

    interface TaskProps {
        tasks?: TasksProps[];
        onAdd?: (enteredTask: string) => void;
        onDelete?: () => void;
    }
}