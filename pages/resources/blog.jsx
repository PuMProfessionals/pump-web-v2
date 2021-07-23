import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Input } from "../../components";
import { PageLayout } from "../../sections/hoc";

const customError = () => (
<div>
    <span role="img" arial-label="waving-hand">
    👋
    </span>{" "}
    Unfortunately, we could not reach our database due to an internal server error.
    We&apos;re doing our best to fix this for you soon. Sorry for
    the inconvenience!
</div>
  );

export default function Blog({ ...props }) {
    const [searchParameter, setSearchParameter] = useState("");
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(() => {
        axios.get(`/api/blog`)
            .then(res => {
                setBlogPosts(res.data.results);
                console.log(blogPosts);
            }).catch(err => {
                console.log(err);
            });
    }, []);
    const handleChange = (e) => {
        setSearchParameter(e.target.value);
        if(searchParameter > 3) {
            axios.get(`/api/blog?search=${e.target.value}`)
                .then(res => {
                    setBlogPosts(res.data.results);
                }).catch(err => {
                    console.log(err);
                });
        }
    }
    return (
        <PageLayout>
            <Wrapper {...props}>
                <Input
                    placeholder="Search blog"
                    name="blog-name"
                    type="text"
                    value={searchParameter}
                    onChange={handleChange}
                />
                {!!blogPosts && blogPosts.map(({ title, summary }) => (
                    <div key={title}>
                        <div>{title}</div>
                        <div>{summary}</div>
                    </div>
                ))}
            </Wrapper>
        </PageLayout>
    );
}

const Wrapper = styled.div``;
