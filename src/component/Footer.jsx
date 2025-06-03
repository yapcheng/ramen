function Footer()  {
    return (
        <footer className="bg-[#D9B87D] text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Ramen Map. All rights reserved.</p>
                <div className="mt-4">
                    <a
                        href="#"
                        className="text-white hover:text-black mx-2 transition-colors duration-300"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-black mx-2 transition-colors duration-300"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-black mx-2 transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
