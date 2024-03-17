import spareform from "../Models/spareform";

export const addspare = (req, res) => {
    console.log(req.body.formdata);
    const { title, price, category, image } = req.body.formdata;
    const stud = new spareform({
      title, price, category, image
    });
    try {
      stud.save()
    } catch (err) {
      console.log(err);
    }
    return res.send({ msg: "inserted", result: stud });
};

export const getspare = async(req,res,next)=>{
    let coursedata;
    try{
        coursedata=await spareform.find();
    }catch(err){
        console.log(err);
    }
  
    if(!coursedata){
        return res.status(404).json({message:"No courses found"})
    }
    return res.status(200).json({coursedata})
};