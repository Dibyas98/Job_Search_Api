const jobmodel = require('../model/job')

const createJob = async(req,res) =>{
    try {
        const newjob =new jobmodel(req.body);
        await newjob.save();
    
        
        res.json({
            success:true,
            message: "post job api"+ newjob._id
        });
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message: "something went wrong"
        });
    }
};

const getJob = async(req,res) => {
    try {
        const joblist = await jobmodel.find({})
        res.json({
            success: true,
            result:joblist
        });
        
    } catch (error) {
        res.status(404).json({
            success: true,
            message: "No job list",
            results:joblist
        });
    }
}
const getJobById = async (req,res) =>{
    try {
        const jobdata= await jobmodel.find({_id: `${req.params.id}`})
        // const jobdata= await jobmodel.findById(req.params.id)
        res.json({
            success:true,
            result: jobdata
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:'No job list'
        })
        
    }
}

const updateJob = async(req,res) =>{
    try {
        await jobmodel.findByIdAndUpdate(req.params.id,req.body);
        res.json({
            success:true,
            message:"edit successfully"
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message:'error'
        })
    }
}

const deleteJob = async(req,res) =>{
    try {
        await jobmodel.findByIdAndDelete(req.params.id);
        res.json({
            success:true,
            message:'Job delete successfuly'
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:'Could not find the job'
        })
        
    }
}


module.exports={
    createJob,
    getJob,
    getJobById,
    updateJob,
    deleteJob
}