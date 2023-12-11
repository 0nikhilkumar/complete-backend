const express = require("express");
require("dotenv").config();
const app = express();

const port = 4000;

const gitHubData = {
  "login": "0nikhilkumar",
  "id": 94776274,
  "node_id": "U_kgDOBaYr0g",
  "avatar_url": "https://avatars.githubusercontent.com/u/94776274?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/0nikhilkumar",
  "html_url": "https://github.com/0nikhilkumar",
  "followers_url": "https://api.github.com/users/0nikhilkumar/followers",
  "following_url": "https://api.github.com/users/0nikhilkumar/following{/other_user}",
  "gists_url": "https://api.github.com/users/0nikhilkumar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/0nikhilkumar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/0nikhilkumar/subscriptions",
  "organizations_url": "https://api.github.com/users/0nikhilkumar/orgs",
  "repos_url": "https://api.github.com/users/0nikhilkumar/repos",
  "events_url": "https://api.github.com/users/0nikhilkumar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/0nikhilkumar/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Nikhil Kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": "0nikhilkumar_",
  "public_repos": 33,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2021-11-21T06:22:32Z",
  "updated_at": "2023-11-17T15:25:49Z"
  }

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("nikhilkumar");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at this website</h1>");
});

app.get("/github", (req, res)=> {
  res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
