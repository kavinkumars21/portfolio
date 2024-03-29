import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImage } from '../Store/Slice/getImage';
import { getPersonalDetail } from '../Store/Slice/getPersonalDetail';
import loader from './Image/loading.gif';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonalDetail());
    dispatch(getImage());
  }, []);

  const { personalData } = useSelector((state) => state.personalInfo);
  const { Image, ImageLoading } = useSelector((state) => state.image);

  return (
    <>
      {
        ImageLoading && <div className='min-h-screen items-center flex justify-center bg-black'>
          <img className='h-[150px] w-[120px]' src={loader} alt=''></img>
        </div>
      }
      {
        ImageLoading === false && (
          <div>
            <div className='flex min-h-screen bg-black'>
              <div className='text-red-200 w-1/2 text-center'>
                <div>
                  {
                    personalData?.length > 0 && personalData.map((data) => (
                      <div className='mt-[30%] sm:mt-[70%]' key={data._id}>
                        <p className='decoration-orange-900n font-semibold font-marker text-5xl italic p-8 sm:text-xl sm:p-2 sm:mb-5'>MERN STACK DEVELOPER</p>
                        <p className='text-2xl font-bold sm:text-sm'>{data.FirstName} {data.LastName}</p>
                      </div>
                    ))
                  }
                </div>
                <div className='mt-[20px] sm:mt-[5px]'>
                  <Link to="/about">
                    <button className='text-gray-500'>About Me</button>
                  </Link>
                </div>
              </div>
              <div className='w-1/2'>
                {
                  Image?.length > 0 && Image.map((img) => {
                    const base64String = btoa(
                      new Uint8Array(img?.profilePic?.data?.data)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                    )
                    return (
                      <div key={img._id} className='flex justify-center'>
                        <img
                          className='w-[510px] h-[600px] sm:w-[260px] sm:h-[300px] sm:mt-[20%]'
                          src={`data:image/png;base64,${base64String}`}
                          alt="">
                        </img>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Home
