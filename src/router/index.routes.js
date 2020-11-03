import {pages} from '../controlers/index';

let content = document.querySelector("#root");

const router = async (route) => {
  content.innerHTML = "";
  switch(route) {
    case "#/": {
      return content.appendChild(pages.home())
    }
    case "#/post":
      return content.appendChild(await pages.post())
    case "#/products":
      return console.log("Products!");
    default:
      return content.appendChild(pages.notFound())
  }
}

export {router};