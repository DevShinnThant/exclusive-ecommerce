import Strapi from "strapi-sdk-js";

const strapi = new Strapi({
  url: process.env.STRAPI_URL || "http://localhost:1337",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
});

export default strapi;
