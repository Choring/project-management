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
        projects?:ProjectData[]
    }

    type ProjectState = {
        selectedProjectId: string | null | undefined;
        projects: Array<Project>
    }

    interface ProjectData {
        id?: number;
        title: string | undefined,
        description: string | undefined;
        dueDate: string | null;
    }
}