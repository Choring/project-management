import { useState } from "react"
import { Footer } from "./components/Layout/Footer"
import { Header } from "./components/Layout/Header"
import { SideBar } from "./components/Layout/SideBar"
import { NewProject } from "./components/Project/NewProject"
import { NoProject } from "./components/Project/NoProject"
import { SelectProject } from "./components/Project/SelectProject"


function App() {
  const [projectedState, setProjectdState] =useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  const handleAddTask = (text: string) => {
    setProjectdState(prevState => {
      const textId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: textId
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    });
  }

  const handleDeleteTask = (id:number) => {
    setProjectdState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  const handleSelectProject = (id:number) => {
    setProjectdState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const handleStartAddProject = () => {
    setProjectdState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }


  const handleCanceAddProject = () => {
    setProjectdState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  
  const handleAddProject = (projectData: ProjectData) => {
    setProjectdState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  const handleDeleteProject = () => {
    setProjectdState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }
  
  const selectedProject = projectedState.projects.find(project => project.id === projectedState.selectedProjectId);

  let content = <SelectProject 
    project={selectedProject} 
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask} 
    onDeleteTask={handleDeleteTask}
    tasks={projectedState.tasks}
  />

  if(projectedState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCanceAddProject} />
  } else if (projectedState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }


  return (
    <>
      <Header />
      <main className="flex gap-8 h-screen">
        <SideBar 
          onStartAddProject={handleStartAddProject} 
          projects={projectedState.projects} 
          onSelectProject={(id:number) => handleSelectProject(id)} 
          selectedProjectId={projectedState.selectedProjectId}
        />
        {content}
      </main>
      <Footer />
    </>
  )
}

export default App
