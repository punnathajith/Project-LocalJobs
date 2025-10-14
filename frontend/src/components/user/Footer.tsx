import { 
  IconBrandXFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconCopyright 
} from '@tabler/icons-react';
import Container from './Container';
import { Link } from 'react-router-dom';

const socialLinks = [
  { Icon: IconBrandXFilled, color: "hover:text-black" },
  { Icon: IconBrandInstagram, color: "hover:text-pink-500" },
  { Icon: IconBrandLinkedin, color: "hover:text-blue-600" },
  { Icon: IconBrandGithub, color: "hover:text-black" },
];

const footerLinks = [
  { title: "Product", links: ["Features", "Pricing"] },
  { title: "Resources", links: ["Company", "Tutorials"] },
  { title: "Company", links: ["About", "Contact"] },
];

const FooterLinkGroup = ({ title, links }: { title: string; links: string[] }) => (
  <div className="flex flex-col gap-3 min-w-[100px]">
    <h4 className="font-inter font-medium">{title}</h4>
    {links.map((link, i) => (
      <Link key={i} to="#" className="hover:underline">{link}</Link>
    ))}
  </div>
);

const Footer = () => {
  return (
    <Container>
      <div className="bg-[#fdfdfd] rounded-xl flex flex-col items-center relative pt-10 pb-20">
        
        <div className="flex flex-col w-full max-w-6xl bg-white rounded-3xl border border-[#f0f0f0] shadow-[0_5px_6px_-4px_rgba(0,0,0,0.3)] p-6 sm:p-10 mb-5">
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10 pb-6 border-b border-black/10">
            {/* Brand Info */}
            <div className="flex flex-col gap-4 md:max-w-sm">
              <h2 className="font-GeneralSans text-2xl font-black">LocalJobs</h2>
              <p className="font-inter text-sm font-medium leading-relaxed">
                Connect instantly with verified local employers for daily wage or part-time work, secured with DigiLocker verification.
              </p>
              <div className="flex gap-3 text-gray-600">
                {socialLinks.map(({ Icon, color }, i) => (
                  <Icon key={i} className={`cursor-pointer transition-colors ${color}`} />
                ))}
              </div>
            </div>

            {/* Link Groups */}
            <div className="flex flex-wrap gap-8 text-sm">
              {footerLinks.map((group, i) => (
                <FooterLinkGroup key={i} {...group} />
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-5 text-xs sm:text-sm text-gray-600">
            <p className="flex items-center gap-1">
              <IconCopyright size={14} /> 2025 LocalJobs. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link to="#" className="hover:underline">Privacy Policy</Link>
              <Link to="#" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Decorative Text */}
        <div className="w-full max-w-6xl overflow-hidden h-[7rem] absolute bottom-0">
          <h1 className="font-Montserrat text-[8rem] sm:text-[11.5rem] uppercase font-black leading-none bg-gradient-to-t from-white to-[#e7e8e9] bg-clip-text text-transparent">
            localjobs
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
