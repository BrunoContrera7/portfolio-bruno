import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_tjahcgc", // reemplaza con tu Service ID
        "template_g9jcreg", // reemplaza con tu Template ID
        form,
        "Csinj-czxzffAZdqI" // reemplaza con tu Public Key
      )
      .then(
        () => {
          setStatus("success");
          form.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#151515] p-8 rounded-lg w-full max-w-md border border-gray-700 space-y-4"
      >
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded font-medium hover:bg-gray-200 transition"
        >
          Send Message
        </button>

        {status === "success" && (
          <p className="text-green-400 mt-4 text-center">
            Message sent successfully ✅
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4 text-center">Something went wrong ❌</p>
        )}
      </form>
    </section>
  );
}
