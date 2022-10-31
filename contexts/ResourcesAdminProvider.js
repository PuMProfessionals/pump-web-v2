import { createContext, useContext, useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../utils/constants";
import { simpleUUID } from "../utils/methods/general";
import useLocalStorage from "../utils/hooks/useLocalStorage";

const Context = createContext();

const defaultBlogProjects = Array.from({ length: 6 }, (_v, i) => {
  return {
    id: simpleUUID(7),
    name: `blog-project-${i + 1}`,
    lastSaved: Date.now(),

    // blog contents
    title: "",
    date: "",
    releaseBatch: "",
    authors: [],
    tags: [],
    body: "",
  };
});
const defaultJobProjects = Array.from({ length: 3 }, (v, i) => {
  return {
    id: simpleUUID(7),
    name: `job-opportunity-project-${i + 1}`,
    lastSaved: Date.now(),
  };
});

export function ResourcesAdminProvider({ children }) {
  /**
   * @TODO : remove entirely, only store important project info
   * (title, last modified) here.
   * then on each route, store each blog/resource independently
   * in LS
   * This so there isnt 1 huge LS value
   */
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
