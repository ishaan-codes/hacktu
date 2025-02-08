import express from 'express';
import { 
  getSellers, 
  getSellerById, 
  updateSeller, 
  deleteSeller 
} from '../controllers/sellerController.js';

const router = express.Router();

router.get('/', getSellers);
router.get('/:id', getSellerById);
router.put('/:id', updateSeller);
router.delete('/:id', deleteSeller);

export default router;
