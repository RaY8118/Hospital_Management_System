import express from 'express';
import { getAllDiseases } from "../controller/diseaseController.js"
import { isPatientAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get('/diseases', getAllDiseases);

export default router;
