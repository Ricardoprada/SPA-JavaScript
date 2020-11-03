import Home from  './home.controler'
import Post from './post.controler'
import notFound from './404.controler'

const pages = {
  home: Home,
  post: Post,
  notFound: notFound
}

export {pages}