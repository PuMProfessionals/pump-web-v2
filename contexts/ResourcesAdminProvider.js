import { createContext, useContext, useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../utils/constants";
import { simpleUUID } from "../utils/methods/general";
import useLocalStorage from "../utils/hooks/useLocalStorage";

const Context = createContext();

const defaultBlogProjects = Array.from({ length: 6 }, (_v, i) => {
  return {
    id: simpleUUID(7),
    name: `blog-project-${i + 1}`,
    lastModified: Date.now(),
  };
});
const defaultJobProjects = Array.from({ length: 3 }, (_v, i) => {
  return {
    id: simpleUUID(7),
    name: `job-opportunity-project-${i + 1}`,
    lastModified: Date.now(),
  };
});

export function ResourcesAdminProvider({ children }) {
  const [blogTemplates, setBlogTemplates] = useLocalStorage(
    LOCAL_STORAGE_KEYS.AdminBlogProjects,
    defaultBlogProjects
  );
  const [jobOpportunityTemplates, setJobOpportunityTemplates] = useLocalStorage(
    LOCAL_STORAGE_KEYS.AdminJobOppProject,
    defaultJobProjects
  );

  return (
    <Context.Provider
      value={{
        blogTemplates,
        setBlogTemplates,
        jobOpportunityTemplates,
        setJobOpportunityTemplates,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useResourcesAdmin() {
  return useContext(Context);
}
