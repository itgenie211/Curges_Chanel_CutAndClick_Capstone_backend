const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router()

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.get('/:id', productController.updateProduct);
router.get('/:id', productController.deleteProduct);

module.exports = router;




