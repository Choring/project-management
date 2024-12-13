import { useState } from "react"
import { Footer } from "./components/Layout/Footer"
import { Header } from "./components/Layout/Header"
import { SideBar } from "./components/Layout/SideBar"
import { NewProject } from "./components/NewProject"
import { NoProject } from "./components/NoProject"


function App() {
  const [projectedState, setProjectdState] =useState<ProjectState>({
    selectedProjectId: undefined,
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectdState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if(projectedState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectedState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <>
      <Header />
      <main className="flex gap-8 h-screen my-8">
        <SideBar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
      <Footer />
    </>
  )
}

export default App
