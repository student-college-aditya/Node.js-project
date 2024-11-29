import usermodel from "../model/usermodel.js";

const homeController = async (req, res) => {
  try {
    res.render('index');
  } catch (error) {
    console.error("Error saving user:", error.message);
    res.status(500).send("An error occurred while saving user data");
  }
};

const contactusController=async(req,res)=>{
    try{
        const data = new usermodel({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
          });
      if(data){
          await data.save();
          console.log("User saved successfully");
      }        res.render('index')
    }catch(error){
        console.error("Error saving user:", error.message);
    }
}

export { homeController, contactusController };
