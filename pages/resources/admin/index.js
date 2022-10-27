import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ADMIN_LOGIN_SCHEMA } from "../../../utils/yup";
import axios from "axios";
import { PageLayout } from "../../../sections/hoc";
import Head from "next/head";

import HorizontalSeparator from "../../../components/HorizontalSeparator";
import { Button, Input } from "../../../components";
import { SInput } from "../../../components/Input";
import BlogTemplateRow from "../../../components/resourcesAdmin/BlogTemplateRow";
import JobOpportunityRow from "../../../components/resourcesAdmin/JobOpportunityRow";
import styled from "styled-components";
import { useResourcesAdmin } from "../../../contexts/ResourcesAdminProvider";
import { useAdmin } from "../../../contexts/AdminProvider";

export default function ResourcesAdmin() {
  // login heleprs
  const { register, handleSubmit, formState, reset, getValues } = useForm({
    resolver: yupResolver(ADMIN_LOGIN_SCHEMA),
  });
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginHelperMsg, setLoginHelperMsg] = useState("");

  // after login phase
  const { adminUser, setAdminUser } = useAdmin();

  // after login & admin
  const { blogTemplates, jobOpportunityTemplates } = useResourcesAdmin();

  const handleLogIn = async ({ name, password }) => {
    if (loggingIn) return;
    setLoggingIn(true);

    const res = await axios.post("/api/admin/log-in", { name, password });
    // console.log(res);

    if (res.data.loggedIn) {
      setAdminUser(res.data.user);
    } else if (res.data.wrongCombination) {
      setLoginHelperMsg("Wrong username and password combination");
    }

    reset({
      ...getValues(),
      name: res.data.loggedIn ? "" : name,
      password: "",
    });
    setLoggingIn(false);
  };

  return (
    <PageLayout>
      <Head>
        <title>PuMP Admin Dashboard</title>
      </Head>

      <AdminHeader>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            padding: ".3rem",
            fontSize: "1.8rem",
          }}
        >
          Utiliy menu coming...
        </div>
      </AdminHeader>

      <DashboardContainer>
        {!adminUser && (
          <AuthorizationContainer>
            <AuthorizationInputContainer>
              <AuthorizationTitle>The PuMP Admin Dashboard</AuthorizationTitle>

              <HorizontalSeparator />

              <LogInInputTitle>
                Authenticate Identity with Credentials
              </LogInInputTitle>

              <SInput type={"text"} placeholder="Name" {...register("name")} />
              <LogInHelper>{formState.errors.name?.message}</LogInHelper>

              <SInput
                type={"password"}
                placeholder="Password"
                {...register("password")}
              />
              <LogInHelper>{formState.errors.password?.message}</LogInHelper>

              <LogInHelper>{loginHelperMsg}</LogInHelper>
              <Button onClick={handleSubmit(handleLogIn)}>AUTHENTICATE</Button>
            </AuthorizationInputContainer>
          </AuthorizationContainer>
        )}

        {adminUser && (
          <AdminDashboardContainer>
            <DashboardSidebar>
              <div style={{ fontSize: "1.2rem" }}>Utility sidebar coming...</div>
            </DashboardSidebar>

            <DashboardPanel>
              <h1>Projects</h1>
              <Input
                type={"text"}
                style={{ width: "90%", marginTop: ".5rem" }}
                placeholder="Search projects (Coming soon..)"
                disabled
                onClick={() => alert("being made")}
              />

              <h2>Blogs</h2>
              {blogTemplates.map((blog) => (
                <BlogTemplateRow key={blog.id} blog={blog} />
              ))}

              <h2>Job Opportunities</h2>
              {jobOpportunityTemplates.map((jobOpportunity) => (
                <JobOpportunityRow key={jobOpportunity.id} />
              ))}

              <h1>yo</h1>
              <p>asdjskkljasdlaj</p>
            </DashboardPanel>
          </AdminDashboardContainer>
        )}
      </DashboardContainer>
    </PageLayout>
  );
}

// will contain utility menu for settings like changing password
const DASHBOARD_MIN_HEIGHT = "100vh";

const DashboardContainer = styled.div`
  position: relative;

  min-height: ${DASHBOARD_MIN_HEIGHT};
  width: 100%;
  background-color: #d3d3d3c7;

  h1 {
    margin: 0;
    padding: 0;
  }
`;

const AdminHeader = styled.header`
  display: flex;
  height: 8vh;
  padding: 0.5rem;
  background-color: #1e2530;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid white;
  color: white;
`;

// pre-authorization styles

const AuthorizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: ${DASHBOARD_MIN_HEIGHT};
  background-color: #e0e0e0e5;
`;

const AuthorizationInputContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 40%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 4rem 1rem;
  min-width: clamp(300px, 60vw, 9999px);

  box-shadow: gray 0px 0px 0px 2px inset, darkblue 10px -10px 0px -3px,
    white 10px -10px, darkblue 20px -20px 0px -3px, gold 20px -20px,
    darkblue 30px -30px 0px -3px, white 30px -30px, darkblue 40px -40px 0px -3px,
    white 40px -40px;
`;

const AuthorizationTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const LogInInputTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const LogInHelper = styled.p`
  font-size: 1rem;
  color: red;
`;

// after-authorization styles

const AdminDashboardContainer = styled.div`
  display: flex;
  width: 100%;
`;

const DashboardSidebar = styled.section`
  width: 12.5vw;
  height: ${DASHBOARD_MIN_HEIGHT};
  color: white;
  background-color: #2c3645;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  padding: 1rem;
`;

const DashboardPanel = styled.section`
  padding: 1rem;
  flex-grow: 1;
  overflow-y: auto;
`;
