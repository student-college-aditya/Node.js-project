import express from 'express'
import {homeController, contactusController} from '../controllers/homeController.js'

const routes=express.Router()

routes.get('/', homeController)
routes.post('/', contactusController)

export default routes