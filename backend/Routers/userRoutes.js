import express from 'express';
import { 
  getUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/id/:id', getUserById);
router.put('/id/:id', updateUser);
router.delete('/id/:id', deleteUser);

export default router;
