import React, { useState } from 'react'
import './DynamicNoramal.css'
export default function DynamicNoramal() {

    const [data, setData] = useState({
        basicInfo: {
            firstName: "",
            lastName: ""
        },
        education: [{
            uniName: "",
            startDate: "",
            endDate: "",
            educationLevel: ""
        }]
    });



    const addmore = () => {

        let m = [...data.education];
        m.push({
            uniName: "",
            startDate: "",
            endDate: "",
            educationLevel: ""
        });

        setData({ ...data, education: m });

    }

    const deleteEducation = (index) => {
        let m = [...data.education];
        m.splice(index, 1);
        setData({ ...data, education: m });
    }

    const myhandler = (e) => {
        const { name, value } = e.target;

        let mydata = { ...data };
        let d = name.split(".");


        if (!Array.isArray(mydata[d[0]])) {
            mydata[d[0]][d[1]] = value;
        }
        else {
            // My logic 

            // let field = d[1].split("[")[0];
            // let index = Number(d[1].substr(-2, 1));
            // mydata[d[0]][index][field] = value;

            // Sir logic 
            let index1 = d[1];
            let index = index1.substr(index1.indexOf('[') + 1, 1);
            let field = index1.substring(0, index1.indexOf('['));
            mydata[d[0]][index][field] = value;
        }


        setData(mydata);


    }

    const mySave = (e) => {

        e.preventDefault();

        console.log(data);

    }

    return (
        <div className='container'>

            <form onSubmit={mySave}>

                <div>

                    <span className='h3'>Basic Information</span>

                    <div>
                        <label>Enter your First Name</label>
                        <input type="text" name='basicInfo.firstName' placeholder='Enter your firstName' onChange={myhandler} />
                    </div>
                    <div>
                        <label>Enter your last Name</label>
                        <input type="text" name='basicInfo.lastName' placeholder='Enter your lastName' onChange={myhandler} />
                    </div>

                    <span className='h3'>Education Information</span>

                    {
                        data.education.map((value, index) => {

                            return (<div>
                                <span className='h2'>Education - {index + 1}</span>
                                <div>
                                    <label>Enter your First Name</label>
                                    <input type="text" name={`education.uniName[${index}]`} placeholder='Enter your university' onChange={myhandler} />
                                </div>
                                <div>
                                    <label>Start Date</label>
                                    <input type="date" name={`education.startDate[${index}]`} onChange={myhandler} />
                                </div>
                                <div>
                                    <label>End Date</label>
                                    <input type="date" name={`education.endDate[${index}]`} placeholder='end' onChange={myhandler} />
                                </div>
                                <label>Education Level</label>
                                <select name={`education.educationLevel[${index}]`} onChange={myhandler}>
                                    <option value="">Select</option>
                                    <option value="Post Gradution">Post Gradution</option>
                                    <option value="Gradution">Gradution</option>
                                    <option value="PHD">PHD</option>
                                </select>
                                {
                                    index == 0 ? "" : <button className="btn" type='button' onClick={() => { deleteEducation(index) }}>Delete</button>
                                }
                                {
                                    index == data.education.length - 1 ? <button type='button' onClick={addmore} className="btn">AddMore</button> : ""
                                }

                            </div>)


                        })
                    }

                </div>

                <input type="submit" className="btn" value="saveData" />
            </form>


        </div>
    )
}
