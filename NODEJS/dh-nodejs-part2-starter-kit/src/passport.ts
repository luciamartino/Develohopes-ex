import dotenv from "dotenv";
import {ExtractJwt, Strategy} from "passport-jwt";
import passport from "passport"
import db from "./db.js";

dotenv.config()
const secret = process.env.SECRET || ""

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

passport.use(
    new Strategy(options, async (payload, done) => {
        try {
            const user = await db.oneOrNone(`SELECT * FROM users WHERE id=$1`, [payload.id])
            if(user){
                return done(null, user)
            }else{
                return done(null, false)
            }
        } catch (error) {
            return done(error, false)

        }
    })
)

export default passport
