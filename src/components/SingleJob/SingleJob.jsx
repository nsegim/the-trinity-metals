import { useEffect, useRef, useState } from "react";
import SiteFooter from "../Footer/Footer";
import SiteHeader from "../header/Header";
import ImageGallery from "../ImageGallery";
import './SingleJob.css';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { fetchData } from "../../config/apiConfig";
import moment from "moment";
import Spinner from "../Spinner/Spinner";


const SingleJob = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isClicked, setIsClicked] = useState(false);
    const [jobData, setJobData] = useState(null);
    const { id } = useParams();
    const applyRef = useRef(null);

    // Function to scroll to application form
    const HandleApplyButton = () => {
        applyRef.current?.scrollIntoView({ behavior: "smooth" });
        setIsClicked(true);
    };

    // Fetch job data
    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await fetchData(`job/${id}`);
                setJobData(response);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        };

        fetchJobData();
    }, [id]);

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <>
            <SiteHeader />
            <div className="vacancy-name-wrapper container">
                <div className="vacancy-name">
                    <h1>Job Description</h1>
                </div>
                
                {jobData ? (
                    <>
                        <div className="job-details">
                            <div className="job-title">
                                <p>Job Title: <span>{jobData?.title?.rendered}</span></p>
                            </div>
                            <div className="job-type">
                                <ImageGallery imageUrl={'https://contents.trinity-metals.com/wp-content/uploads/2025/03/user-icon.svg'} />
                                <p>Job Type: <span>{jobData?.acf?.job_type}</span></p>
                            </div>
                            <div className="job-location">
                                <ImageGallery imageUrl={'https://contents.trinity-metals.com/wp-content/uploads/2025/03/Symbol.svg'} />
                                <p>{jobData?.acf?.location}</p>
                            </div>
                            <div className="post-date">
                                <ImageGallery imageUrl={'https://contents.trinity-metals.com/wp-content/uploads/2025/03/calendar.svg'} />
                                <p>Posted: <span>{moment(jobData?.date).format("DD/MM/YYYY")}</span></p>
                            </div>
                        </div>

                        <div className="job-requirement" dangerouslySetInnerHTML={{ __html: jobData?.content?.rendered }} />

                        <div id="applyButton" className="pt-4">
                            <button onClick={HandleApplyButton}>Apply Now</button>
                        </div>

                        {/* Application Form */}
                        <div ref={applyRef} className="pt-5">
                        {
                           isClicked ? (
        
                                        
                                        
        
                                            <div className="application-form">
                                                <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
                                                    <h2 className="text-2xl font-bold mb-4">Application Form</h2>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        {/* Personal Information */}
                                                        <div className="field-group">
                                                            <div className="mb-4">
                                                                <label className="block font-semibold">First Name *</label>
                                                                <input {...register("firstName", { required: true })} className=" p-2 border rounded" />
                                                                {errors.firstName && <p className="text-red-500">First name is required</p>}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block font-semibold">Last Name *</label>
                                                                <input {...register("lastName", { required: true })} className=" p-2 border rounded" />
                                                                {errors.lastName && <p className="text-red-500">Last name is required</p>}
                                                            </div>
                                                        </div>
                                                        <div className="field-group">
                                                        <div className="mb-4">
                                                                <label className="block font-semibold">Email *</label>
                                                                <input {...register("email", { required: true })} type="email" className=" p-2 border rounded" />
                                                                {errors.email && <p className="text-red-500">Valid email is required</p>}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block font-semibold">Phone/Mobile *</label>
                                                                <input {...register("phone", { required: true })} className=" p-2 border rounded" />
                                                                {errors.phone && <p className="text-red-500">Phone number is required</p>}
                                                            </div>
                                                        </div>
                    
                                                        
                                                        
                                                        {/* Gender */}
                                                        <div className="mb-4">
                                                            <label className="block font-semibold">Gender *</label>
                                                            <div>
                                                                <label className="mr-4">
                                                                    <input {...register("gender", { required: true })} type="radio" value="Male" /> Male
                                                                </label>
                                                                <label>
                                                                    <input {...register("gender", { required: true })} type="radio" value="Female" /> Female
                                                                </label>
                                                            </div>
                                                            {errors.gender && <p className="text-red-500">Gender selection is required</p>}
                                                        </div>
                                                        {/* Job Information */}
                                                        <div className="mb-4 full-width">
                                                            <label className="block font-semibold">Education Background *</label>
                                                            <textarea {...register("education", { required: true })} className="p-2 border rounded"></textarea>
                                                            {errors.education && <p className="text-red-500">Education background is required</p>}
                                                        </div>
                    
                                                        <div className="field-group">
                                                            <div className="mb-4">
                                                                <label className="block font-semibold">Full-time Experience (Years) *</label>
                                                                <input {...register("experience", { required: true })} type="number" className=" p-2 border rounded" />
                                                                {errors.experience && <p className="text-red-500">Experience is required</p>}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block font-semibold">Previous Job & Organization *</label>
                                                                <input {...register("previousJob", { required: true })} className=" p-2 border rounded" />
                                                                {errors.previousJob && <p className="text-red-500">Previous job details are required</p>}
                                                            </div>
                                                        </div>
                                                        
                                                        {/* File Uploads */}
                                                        <div className="field-group">
                                                            <div className="mb-4">
                                                                <label className="block font-semibold">Upload your CV *</label>
                                                                <input {...register("cv", { required: true })} type="file" className=" p-2 border" />
                                                                {errors.cv && <p className="text-red-500">CV upload is required</p>}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block font-semibold">Upload Cover Letter *</label>
                                                                <input {...register("credentials", { required: true })} type="file" className=" p-2 border" />
                                                                {errors.credentials && <p className="text-red-500">Academic credentials upload is required</p>}
                                                            </div>
                                                        </div>
                                                        
                                                        {/* MTN Values Question */}
                                                        <div className="mb-4 full-width">
                                                            <label className="block font-semibold">Which Trinity value resonates most with you and why? *</label>
                                                            <textarea {...register("trinityValue", { required: true })} className=" p-2 border rounded"></textarea>
                                                            {errors.trinityValue && <p className="text-red-500">This field is required</p>}
                                                        </div>
                                                        {/* Privacy Checkbox */}
                                                        <div className="mb-4">
                                                            <label className="flex items-center">
                                                                <input {...register("privacy", { required: true })} type="checkbox" className="mr-2" />
                                                                I have read and agree to the Privacy Notice
                                                            </label>
                                                            {errors.privacy && <p className="text-red-500">You must agree to the privacy notice</p>}
                                                        </div>
                                                        {/* Submit Button */}
                                                        <button type="submit" className="bg-blue-600 text-white p-2 rounded job-application-submit-btn">Submit Application</button>
                                                    </form>
                                                </div>
                                            </div>
                                        
                            ):(
                                <div></div> 
                            )
                        }
                        </div>
                    </>
                ) : (
                   <Spinner />
                )}
            </div>

            <SiteFooter />
        </>
    );
};

export default SingleJob;