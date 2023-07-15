const nodeMailer = require("nodemailer");


exports.mailAFriend = async(req,res)=>{
    const {email} = req.body;

    const transporter = nodeMailer.createTransport({
        service : "gmail" ,
        auth: {
          user:'libin9811@gmail.com',
          pass: 'qpgaecwmxlikhgfd', // generated ethereal password
        },
      });

      const message = {
        from : 'libin9811@gmail.com',
        to : `${email}`,
        subject : 'nodemailer Assingment',
        // text : 'Successfully completed Mail a friend Assignment',
        html : '<h2><em><em/>Successfully completed Mail a friend Assignment</h2>'

      }

      const info = await transporter.sendMail(message)

      console.log("Message sent: %s", info.messageId);
 
  
     res.send(`email send successully to ${email}`)
    
}