const Model         = require ('../models/index.js')

class Controller{

  static register(){
    let data={
      first_name  :'andromeda',
      last_name   :'kambira',
      email       :'androgred@gmail.com',
      password    :'12345678',
      phone       :81212149270,
      birthday    :"01 November 1990",
      balance     :200000
      // first_name  :req.body.first_name,
      // last_name   :req.body.last_name,
      // email       :req.body.email,
      // password    :req.body.password,
      // phone       :req.body.phone,
      // birthday    :req.body.birthday,
      // balance     :req.body.balance
    }
    Model.User.create(data)
    .then(function(){
      console.log("register berhasil")
      process.exit()
    })
    .catch(function(err){
      console.log(err)
      process.exit()
    })

  }

  static readAll(){
    Model.Video.findAll()
    .then(function (data) {
      console.log(data)
      process.exit()
    })
    .catch((err)=>{
      console.log(err)
      process.exit()
    })
  }


  static readVideo(){
      Model.VideoUser.findAll()

  }


}
Controller.readAll()
