import passport from "passport";
import User from "./models/User";
import KakaoStrategy from "passport-kakao";
import { kakaoLoginCallback } from "./controllers/globalController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
      callbackURL: `http://localhost:4000${routes.kakaoCallback}`
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
