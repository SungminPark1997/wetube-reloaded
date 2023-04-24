export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const editProfile = (req, res) => res.send("editProfile");
export const userId = (req, res) => res.send(`user id is ${req.params.id}`);
export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login");
export const newController = (req, res) => res.send("new");
