const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

// image will be uploaded in cloudary

cloudinary.config({
    cloud_name: process.env.ClOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SEC
})

router.post('/upload', ( req ,res)=>{
    try{
        console.log(req.files)
        if(!req.files || Object.keys(req.files).length ===0)
            return res.status(400).json({msg: 'No files were uploaded'})
        
        const file = req.files.file;

        if(file.size> 1024*1024)
            return res.status(400).json({msg: 'file too large'})
        if (file.mimetype !== 'image/jpeg' && file.mimetype !='image/png')
           return res.status(400).json({msg: `File format isn't connect`})

           cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
            if(err) throw err;
            res.json({public_id: result.public_id,url:result.secure_url})
            
            
        })
       
    }catch(err){
        return res.status(500).json({smg: err.message}) 
    }
})

module.exports = router