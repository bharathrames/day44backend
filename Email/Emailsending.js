import nodemailer from 'nodemailer'


const mail = (url,Useremail,content,subject) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port:"465",
        auth: {
            user:"bharath91505@gmail.com",
            pass:"87654321"
        },
        tls:{
            rejectUnauthorized:true
        }
    
    })
    
    const messagesubject = subject
    const mailtext = `${content} - ${url}`
    
    const info = {
    from:"bharath91505@gmail.com",
    to:Useremail,
    subject:messagesubject,
    text:mailtext
    }
    
    transporter.sendMail(info,(err)=>{
    if(err){
        console.log("mail error ",err)
    }else{
        console.log("Email has been sent")
    }
    })
}

export default mail;
