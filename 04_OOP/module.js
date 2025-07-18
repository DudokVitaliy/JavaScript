import { Post } from "./post";

let post = new Post("Hello World", "This is my first post");
//document.writeln(post.get());
document.body.innerHTML += post.get();