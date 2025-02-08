import Seller from '../models/seller.js';

export const getSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSellerById = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) {
      return res.status(404).json({ error: 'Seller not found' });
    }
    res.status(200).json(seller);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!seller) {
      return res.status(404).json({ error: 'Seller not found' });
    }
    res.status(200).json(seller);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id);
    if (!seller) {
      return res.status(404).json({ error: 'Seller not found' });
    }
    res.status(200).json({ message: 'Seller deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
