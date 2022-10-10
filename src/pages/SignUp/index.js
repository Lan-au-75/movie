import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { actions } from '~/redux';

import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import config from '~/config';
import { auth } from '~/fireBase';

function SignUp() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                dispatch(actions.subscribed(user));

                navigate('/login');
                // ...
            })
            .catch((error) => {
                setError(true);
                // ..
            });
    };

    return (
        <>
            <div className="flex absolute top-0 items-center w-full justify-center h-[var(--header-height)] z-50">
                <div className="absolute flex justify-between items-center w-full px-4">
                    <div>
                        <Link to={config.routers.home} className="flex items-center h-full px-2 py-5">
                            <Image src={images.logo} alt="Logo TMDB" className=" w-full h-5" />
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Button
                            to={config.routers.login}
                            className="btn border border-solid border-white hover:opacity-90"
                        >
                            Sign In
                        </Button>

                        <Button to={config.routers.signUp} className="btn bg-red-600 hover:opacity-90">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
            {/* overplay */}
            <div className="absolute bg-black/60 inset-0 "></div>
            <div className="absolute  flex w-full px-[16px] py-[96px] justify-center ">
                <div className=" bg-black/75 max-w-[450px] min-h-[600px] w-full h-full ">
                    <div className="max-w-[320px] py-[64px] m-auto">
                        <h1 className="text-[30px] text-white leading-9 font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="py-[16px] flex flex-col ">
                            <input
                                value={email}
                                type="email"
                                placeholder="Email"
                                className="my-2 py-3 px-3 font-normal bg-gray-700 rounded text-white"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                value={password}
                                type="password"
                                placeholder="Password"
                                className="my-2 py-3 px-3 font-normal bg-gray-700 rounded text-white"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button className="btn h-[48px] py-[24px] bg-red-700 my-6">Sign Up</Button>
                            <div className="flex items-center justify-between ">
                                <p className="text-sm text-gray-600 ">
                                    <input type="checkbox" name="" id="" className="mr-2" />
                                    Remember me
                                </p>
                                <p className="text-sm text-gray-600">Need Help?</p>
                            </div>
                            <div className="py-8">
                                <span className="text-gray-600">Already subscribed to TMDB?</span>
                                <Link to={config.routers.login} className="text-white ml-2">
                                    Sign In
                                </Link>
                            </div>

                            {error && (
                                <div className="flex items-center justify-center">
                                    <span className="text-red-600">Email already exists</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <Image src={images.loginScreen} alt="loginScreen" className=" w-full h-screen object-cover object-center" />
        </>
    );
}

export default SignUp;
