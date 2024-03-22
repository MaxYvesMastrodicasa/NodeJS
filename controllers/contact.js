export const getContact = (request, response, next) => {
    response.render("contact", {
      pageTitle: "Contact",
      path: "/",
    });
  };