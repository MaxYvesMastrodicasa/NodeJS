export const getSignin = (req, res, next) => {
    res.render('signin', { 
        pageTitle: 'Signin', 
        path: '/'});
};

export default getSignin; 