import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Input } from "../../components";
import { PageLayout } from "../../sections/hoc";

export default function Blog({ ...props }) {
    const [searchParameter, setSearchParameter] = useState("");
    const [blogPosts, setBlogPosts] = useState([]);
    const handleChange = (e) => {
        setSearchParameter(e.target.value);
        if(searchParameter.length > 3) {
            axios.get(`/api/blog?search=${e.target.value}`)
                .then(res => {
                    setBlogPosts(res.results);
                    console.log(res.results);
                    console.log(res.data);
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
                    <>
                        <div>{title}</div>
                        <div>{summary}</div>
                    </>
                ))}
            </Wrapper>
        </PageLayout>
    );
}

const Wrapper = styled.div``;
