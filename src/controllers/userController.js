export const home = (req, res) => {
    return res.render('home', { pageTitle: 'Home' })
}

export const getJoin = (req, res) => {
    return res.render('join', { pageTitle: 'Join' })
}

export const postJoin = (req, res) => {
    return res.redirect('/login');
}

export const getLogin = (req, res) => {
    return res.render('login', { pageTitle: 'Login' })
}

export const postLogin = (req, res) => {
    return res.redirect('/')
}