import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPersonalDetail } from '../Store/Slice/getPersonalDetail';

function About() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersonalDetail());
    }, []);

    const { personalData } = useSelector((state) => state.personalInfo);

    const Navigate = useNavigate();
    const handelProjectPage = () => {
        Navigate("/projects");
    };

    return (
        <div>
            <div className='flex bg-sky-50 min-h-screen w-screen justify-center'>
                {
                    personalData?.length > 0 && personalData.map((data) => (
                        <div className='pt-[90px] leading-[40px] sm:text-[13px] sm:pl-4 sm:leading-[30px]' key={data._id}>
                            <div className='flex'>
                                <div className='w-[120px] sm:w-[95px]'>
                                    <p>Full Name</p>
                                    <p>Date Of Birth</p>
                                    <p>Age</p>
                                    <p>Phone</p>
                                    <p>Email</p>
                                    <p>City</p>
                                    <p>Degree</p>
                                    <p>Major</p>
                                </div>
                                <div>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                </div>
                                <div className='ml-[20px] sm:ml-[5px]'>
                                    <p>{data.FirstName} {data.LastName}</p>
                                    <p>{data.DateOfBirth}</p>
                                    <p>{data.Age}</p>
                                    <p>+91 {data.PhoneNumber}</p>
                                    <p>{data.Email}</p>
                                    <p>{data.City}</p>
                                    <p>{data.Degree}</p>
                                    <p>{data.Major}</p>
                                </div>
                            </div>
                            <div className='mt-[50px] w-[850px] sm:w-fit'>
                                <p>{data.IntroDescription}</p>
                                <p>{data.InterDescription}</p>
                                <p className='cursor-pointer underline' onClick={handelProjectPage}>{data.ProjectDescription}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default About
