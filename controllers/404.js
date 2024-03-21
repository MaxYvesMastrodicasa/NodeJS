export const get404 = (request, response, next) => {
    response.render('404/index', { 
        pageTitle: 'Page Not Found', 
        path: '/'});
};

export default get404; 