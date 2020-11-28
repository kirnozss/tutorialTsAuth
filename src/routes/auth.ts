import {Router} from 'express'
const router: Router = Router()

import {singin, signup, profile} from '../controllers/auth.controller'
import {TokenValidation} from '../libs/verifyToken'

router.post('/signup', signup)
router.post('/signin', singin)
router.get('/profile', TokenValidation, profile)

export default router