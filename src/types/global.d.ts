export {};

declare global {
    // interface 이름 {} or type 이름 = {}
    interface InputProps {
        label: string;
        textarea?: string;
    }

    type ButtonProps = {
        children: string;
        onClick?: () => void;
    }

    interface StartedProjectProps {
        onStartAddProject: () => void;
    }

    type ProjectState = {
        selectedProjectId: string | null | undefined;
        projects: Array<Project>
    }
}