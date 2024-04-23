import React, { useState } from 'react';
import Nav from '../comps/nav';

const Home = (props) => { // Receive props as a parameter
    const [imageClicked, setImageClicked] = useState(false);

    const handleImageClick = () => {
        setImageClicked(!imageClicked);
    };

    return (
        <div>
            <Nav />
            {/* Use props here */}
            <div className={`grid place-items-center h-[90vh] ${imageClicked ? 'bg-green-200' : ''}`}>
                <div className="flex items-center">
                    <div className={`transition-transform transform ${imageClicked ? '-translate-x-40' : ''}`}>
                        <img
                            className="rounded-full w-[300px] cursor-pointer"
                            src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/358074590_1285402802364617_6716374425855529217_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGpWSbpBZ8teu9rshpeNboKJUyG-JukuQ4lTIb4m6S5Dk5WedQRaqqkQMJZjIBNGnzswpFpBNwkSioAM0OimOUo&_nc_ohc=WyeA2akhflUAb4Rf0Oh&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfA5RPjnIaWuz5vACSmb_bCv2-Ldr6_F7V4AvLLgOfBkrA&oe=662D3D01"
                            alt=""
                            onClick={handleImageClick}
                        />
                    </div>
                    {imageClicked && (
                        <div className="ml-4 bg-white p-[50px] rounded-[20px] shadow-lg shadow-black/40 rounded-[20px] ease-in-out duration-300 hover:shadow-black/75 hover:shadow-2xl">
                            <p className='font-extrabold text-5xl'>HELLO THERE!</p>
                            <p>My Name is Jasper Vince</p>
                            <p>19 Years old</p>
                            <p>An aspiring developer</p>
                            {/* You can access props here */}
                            <p>{props.someProp}</p>
                            <p>{props.anotherProp}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
