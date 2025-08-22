import Image from 'next/image';
import React from 'react';

const Faq = () => {
    return (
        <div className="mx-4 md:mx-16 my-10">
            <h2 className="justify-center text-center font-bold text-xl">Frequently Asked</h2>

            <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Left Side - Image */}
            <div className="flex justify-center">
            <Image
                src="/faq.jpeg" 
                alt="FAQ Illustration"
                width={300}
                height={400}
                className="rounded-2xl shadow-md"
            />
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="space-y-4 w-full">
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title font-semibold">
                How do I create an account?
                </div>
                <div className="collapse-content text-sm">
                Click the "Register" button in the top right corner and follow the registration process.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">
                Do you have a physical showroom?
                </div>
                <div className="collapse-content text-sm">
                No, we are available only through this website and our Facebook app.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">
                Are your products authentic?
                </div>
                <div className="collapse-content text-sm">
                We import and sell 100% authentic Korean skincare brand products.
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Faq;