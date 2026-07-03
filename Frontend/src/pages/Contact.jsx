import { useRef, useState } from "react";

import ContactHeader from "../components/ContactHeader";
import ContactInfoCard from "../components/ContactInfoCard";
import ContactForm from "../components/ContactForm";
import axios from "axios";
import toast from "react-hot-toast";

export default function Contact() {
  const nameEle = useRef();
  const emailEle = useRef();
  const subjectEle = useRef();
  const messageEle = useRef();

  const [loading, setLoading] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();

    const data = {
      name: nameEle.current.value,
      email: emailEle.current.value,
      subject: subjectEle.current.value,
      message: messageEle.current.value,
    };

    try {
      setLoading(true);

      // Replace with your backend endpoint
      // await axios.post("YOUR_API_URL/contact", data);
      console.log(data);
      const response = await axios.post(
        "http://localhost:9000/send-email",
        data,
        {
          withCredentials: true,
        },
      );
      console.log(response);

      toast.success("Message sent successfully!");

      nameEle.current.value = "";
      emailEle.current.value = "";
      subjectEle.current.value = "";
      messageEle.current.value = "";
    } catch (error) {
      console.log(error);
      toast.error("Unable to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10">
        {/* Purple Glow */}

        <div
          className="
          absolute
          top-0
          left-0
          h-80
          w-80
          rounded-full
          bg-violet-600/20
          blur-[140px]
          "
        />

        {/* Cyan Glow */}

        <div
          className="
          absolute
          bottom-0
          right-0
          h-96
          w-96
          rounded-full
          bg-cyan-500/20
          blur-[160px]
          "
        />

        {/* Center Glow */}

        <div
          className="
          absolute
          top-1/2
          left-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-fuchsia-500/10
          blur-[150px]
          "
        />
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}

        <ContactHeader />

        {/* Main Section */}

        <div
          className="
          mt-20
          grid
          lg:grid-cols-[0.9fr_1.1fr]
          gap-10
          items-start
          "
        >
          {/* Left */}

          <ContactInfoCard />

          {/* Right */}

          <ContactForm
            submitHandler={submitHandler}
            nameEle={nameEle}
            emailEle={emailEle}
            subjectEle={subjectEle}
            messageEle={messageEle}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
}
