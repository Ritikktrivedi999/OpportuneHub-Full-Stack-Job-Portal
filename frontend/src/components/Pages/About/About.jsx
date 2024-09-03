import Navbar from "@/components/ui/shared/Navbar"
import Contact from "./Contact";
import { Button } from "@/components/ui/button";


export default function About() {
    return (
        <><Navbar />
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src="/Screenshot (305).png"
                                alt="image"
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-1xl text-gray-900 font-bold md:text-2xl">
                                Developed a full-featured Job Portal Application aimed at connecting job seekers with employers. The project demonstrates proficiency in modern web development, focusing on user-friendly design, secure authentication, and efficient data management.
                                <hr/>
                                <hr/>
                                <span>Developed By: Ritik Trivedi</span>
                            </h2>
                            <p className="mt-6 text-gray-600">
                                Key Features:
                                * Authentication & Authorization
                                * Database Management: Architected a MongoDB database for handling job listings, applications, and user data, ensuring optimized performance and scalability.
                                * API Development: Created RESTful APIs with Express for seamless communication between the frontend and backend, managing job postings, applications, and user profiles.
                                * Responsive UI: Designed a mobile-friendly interface using ReactJS and Vite, adhering to best practices for UX/UI with the ShadcnUI framework.
                                * State Management: Leveraged Redux Toolkit for efficient state management across the application, enhancing maintainability and scalability.
                                * File Uploads: Integrated Multer for file handling, allowing users to upload resumes and other documents when applying for jobs.
                                * Search & Filter.
                                * Admin Dashboard: Built an intuitive admin panel for employers to manage job postings and review applications, with tools for tracking applicant progress.

                            </p>
                            <p className="mt-4 text-gray-600">
                                <Button onClick={() => window.open('https://github.com/Ritikktrivedi999/OpportuneHub-Full-Stack-Job-Portal', '_blank')}>
                                    Visit Github Repo
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Contact />
            </div>
        </>
    );
}