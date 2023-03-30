const router = require("express").Router();
const AllPhones = require("../data/phones.json")

router.get("/", (req, res, next) => {
    try {
      console.log("show phones")
      res.json(AllPhones);

    } catch (error) {
      next(error);
    }
  });

router.get("/:id", (req, res, next) => {

    const { id } = req.params
    try {
    const response = AllPhones[id]
        
      res.json(response)  
        
    } catch (error) {
        next(error)
    }

})
module.exports = router;