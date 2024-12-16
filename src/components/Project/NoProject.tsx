import noProjectImg from "../../assets/no-projects.png";
import { Button } from "../Button";

export const NoProject = ({ onStartAddProject } : StartedProjectProps) => {
  return (
    <div className="mt-24 text-center w-2/3">
        <img className="w-16 h-16 object-contain mx-auto" src={noProjectImg} alt="no-project-img" />
        <h2 className="text-xl font-bold text-stone-500 mt-4">프로젝트가 선택되지 않았습니다.</h2>
        <p className="text-stone-400 mb-4">프로젝트를 선택하거나 새로운 프로젝트를 시작하십시오.</p>
        <p className="mt-8">
            <Button onClick={onStartAddProject}>새로운 프로젝트 생성하기</Button>
        </p>
    </div>
  )
}
