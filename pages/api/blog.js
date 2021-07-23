import { postNames } from "../../cache/blog";

/*
    params: 
    - search = search directly for post
    - release = release batch
    - tags = tags to filter
*/
export default (req, res) => {
    let results = postNames;
    console.log(req.query);
    console.log(postNames)
    // results = req.query.search &&
    //   results.filter(post => post.title.toLowerCase().includes(req.query.search));
    // results = req.query.release &&
    //   results.filter(post => post.release_batch.replace(" ", "") === req.query.release);
    // if(req.query.tags) {
    //     for(let tag of req.query.tags.split(",")) {
    //         results = results.filter(post => post.tags.includes(tag));
    //     }
    // }
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ results }));
};
