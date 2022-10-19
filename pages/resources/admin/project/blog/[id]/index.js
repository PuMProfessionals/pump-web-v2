import { useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../../../../../../utils/constants";

export default function BlogProject() {
  useEffect(() => {
    const blogProjects = localStorage.getItem(
      LOCAL_STORAGE_KEYS.ADMIN_BLOG_PROJECTS
    );
  }, []);

  return (
    <div>
      <h1>index BlogProject</h1>
    </div>
  );
}
