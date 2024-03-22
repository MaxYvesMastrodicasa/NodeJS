import mysql from "mysql2/promise";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM auth WHERE user = ?', [username]);
    if (rows.length > 0) {
      const user = rows[0];
      const passwordMatch = await compare(password, auth.password);
      if (passwordMatch) {
        // Authentification réussie, rediriger vers une page appropriée
        req.session.userId = auth.id; // Stocker l'ID de l'utilisateur dans la session
        res.redirect('/dashboard');
      } else {
        res.redirect('/login?error=invalidCredentials');
      }
    } else {
      res.redirect('/login?error=userNotFound');
    }
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.redirect('/login?error=serverError');
  }
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erreur lors de la déconnexion :", err);
    }
    res.redirect("/");
  });
};
