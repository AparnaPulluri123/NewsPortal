let express=require("express")
const{add,login}=require("../controller/usercon")
const{addpost,getpost,getcatpost, updpost, del}=require("../controller/postcon")

let route=new express.Router()
route.post("/reg",add)
route.post("/login",login)
route.post("/addpost",addpost)
route.get("/getpost",getpost)
route.get("/getpost/:cat/:value",getcatpost)
route.post("/upd",updpost)
route.delete("/del/:id",del)
module.exports=route