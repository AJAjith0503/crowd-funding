import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProjectById } from "../services/api";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetchProjectById(id)
      .then((res) => setProject(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!project) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-primary">{project.title}</h2>
      <p className="text-secondary mt-2">{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
