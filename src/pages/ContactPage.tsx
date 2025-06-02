import Page from "../classes/Page"
import { bluebgColor, itemsBgColrs, primaryTextColors, secondaryTextColor } from "../variables/styles/colors";
import { maxScreenXl } from "../variables/styles/size"
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { headerText, sectionHeader, sectionSubheader } from "../variables/styles/text";
import { FormEvent, useState } from "react";
import { handleInputChange } from "../variables/functions/formChange";
import axios from "axios";
import { BASE_API_URL } from "../config";
import Text from "../components/input/Text";
import TextArea from "../components/input/TextArea";
import ToastMessage from "../components/toast/Message";

const ContactPage = () => {
  const [formProp, setFormProp] = useState({fullName: "", email: "", phone: "", message: ""})
  const [msg, setMsg] = useState("")

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    console.log(formProp)
    try {
      await axios.post(`${BASE_API_URL}/users/sendMail`, formProp)
      setMsg("Mail sent")
    } catch (err: any) {
      setMsg(err.response.data.message)
    }
  }

  return (
    <Page>
      <div className={maxScreenXl}>
        <div className="text-center mb-12">
          <h1 className={sectionHeader}>Contact Us<br />
            <p className={sectionSubheader}>We'd love to hear from you. Send us a message!</p>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Updated: Simplified contact form with dark mode */}
          <div className={`${itemsBgColrs} rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-[1.02]`}>
            <form onSubmit={submitForm} className="space-y-6">
              <Text 
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Enter Full Name..."
                isRequired={true}
                value={formProp.fullName}
                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
              />
              <Text 
                id="email"
                label="Email"
                type="email"
                placeholder="Enter email..."
                isRequired={true}
                value={formProp.email}
                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
              />
              <Text 
                id="phone"
                label="Phone number"
                type="tel"
                placeholder="Enter phone..."
                isRequired={true}
                value={formProp.phone}
                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
              />
              <TextArea 
                id="message"
                label="Message"
                placeholder="Message..."
                isRequired={true}
                value={formProp.message}
                handleChange={(e: FormEvent<HTMLTextAreaElement>) => handleInputChange(e, setFormProp)}
              />
              <div>
                <button
                  type="submit"
                  className={`${bluebgColor} cursor-pointer w-full py-3 px-4 rounded-md shadow-sm text-sm font-medium`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Updated: Contact Information with dark mode */}
          <div className={`${itemsBgColrs}  rounded-lg shadow-lg p-8`}>
            <h2 className={`${headerText} mb-6`}>Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                <div>
                  <h3 className={`${primaryTextColors} font-medium`}>Address</h3>
                  <p className={secondaryTextColor}>123 Business Street<br />Suite 100<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-xl" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">contact@company.com</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-800 transition-colors duration-300">
                    <FaFacebook className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {msg && <ToastMessage message={msg} closeMessage={() => setMsg("")} />}
    </Page>
  )
}

export default ContactPage