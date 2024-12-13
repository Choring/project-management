import { Footer } from "./components/Layout/Footer"
import { Header } from "./components/Layout/Header"
import { SideBar } from "./components/Layout/SideBar"


function App() {

  return (
    <>
      <Header />
      <main className="flex h-[100vh]">
        <SideBar />
        <section className="w-[100%] border border-red-200">
          <h2 className="text-3xl text-center font-bold">Hello ts+vite+react</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
