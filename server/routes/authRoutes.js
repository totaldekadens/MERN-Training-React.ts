import checkDuplicateUsernameOrEmail from "../middleware/verifySignUp.js";
import { signin, signup } from "../controllers/authController.js"; 

export const authRoutes = (app) => {
    app.use(function(req, res, next) {
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/auth/signup",
        [
        checkDuplicateUsernameOrEmail,
        ],
        signup
    );
    app.post("/api/auth/signin", signin);
};
