const Products = require('../models/productModel')

const productCtr = {
    getProducts: async(req, res)=>{
        try{
           const products = await Products.find()
           res.json(products)
        }catch(err){
            return res.status(500).json({smg: err.message})
        }
    },
    createProduct: async(req, res)=>{
        try{
            const {product_id, title, price, description, content, images, category} = req.body;
            if(!images) return res.status(500).json({smg: 'no image'})

            const product = await Products.findOne({product_id})
            if(product)return res.status(500).json({smg: err.message})
            const newProduct = new Products({product_id, title: title.toLowerCase(), price, description, content, images, category})
            await newProduct.save()
            res.json({msg: 'create successfully'})
        }catch(err){
            return res.status(500).json({smg: err.message})
        }
    }, 
    deleteProduct: async(req, res)=>{
        try{
            await Products.findByIdAndDelete(req.params.id)
            return res.json({msg: "delete successfully"})
        }catch(err){
            return res.status(500).json({smg: err.message})
        }
    },
    updateProduct: async(req, res)=>{
        try{
        const { title, price, description, content, images, category} = req.body;
        if(!images) return res.status(500).json({smg: 'no image'})
        await Products.findOneAndUpdate({_id: req.params.id},{
            title: title.toLowerCase(), price, description, content, images, category
        })
        res.json({msg: 'updated'})
        }catch(err){
            return res.status(500).json({smg: err.message})
        }
    },

}

module.exports = productCtr