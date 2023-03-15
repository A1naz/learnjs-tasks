function Post(title) {
  this.title = title;
}

let post1 = new Post('Post 1');
let post2 = new post1.constructor('Post 2');

console.log(post2.title);
