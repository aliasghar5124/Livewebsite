import { useState } from "react";

const Contact = () => {
    const [data,setData]=useState({
        fullName:"",
        number:"",
        email:"",
        message:""
    })
    const formSubmit=(e)=>{
        e.preventDefault();
    alert(`${data.fullName},${data.number},${data.email},${data.message}`);
    }
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center" > Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label >Enter Name</label>
                                <input type="text" className="form-control" name="fullName" value={data.fullName} onChange={InputEvent} id="exampleInputEmail"  placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label >Mobile Number</label>
                                <input type="number" className="form-control" name="number" value={data.number} onChange={InputEvent} id="exampleInputEmail2" placeholder="Enter Number" />
                            </div>
                            <div className="form-group">
                                <label >Email address</label>
                                <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} id="exampleInputEmail3"  placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label >Message</label>
                                <input type="text" className="form-control" name="message" value={data.message} onChange={InputEvent} id="exampleInputPassword1" placeholder="Enter Message" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" >Followed By all rules and regulations</label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;