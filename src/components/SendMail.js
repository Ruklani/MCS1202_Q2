import emailjs from 'emailjs-com';
const SendMail = () => {

function sendEmail(e){
  e.preventDefault();

  emailjs.sendForm('service_72utreo','template_2jb1zrj',e.target,'guooQjSFfD75ZU9wJ').then(res=>{
    console.log(res);
  }).catch(err=>console.log(err));
}

 return(
    <div className="container boarder" style = {{marginTop: "50px",width : "50%",backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6HMjX9Jy9ihxMvLflk4dDayorhFzUaWrSdS6x44kQw&s')`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <h1 style={{marginTop:"25px", padding :"10px 150px"}}>Contact Us</h1>
        <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
            <label>Name </label>
            <input type = "text" name ="name" className="form-control"/>
            <br/>
            <label>Email </label>
            <input type = "email" name ="userEmail" className="form-control"/>

            <label>Message </label>
            <textarea type = "message" name ="message" rows="4" className="form-control"/>

            <input type = "submit" value = "Send Email" className = "form-control btn btn-primary" style = {{margin:"30px"}}/>
        </form>
    </div>
 )
}

export default SendMail;