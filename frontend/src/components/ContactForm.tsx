import React from "react";

export default function ContactForm() {
  return (
    <form className="bg-white p-6 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="p-3 border rounded" placeholder="Your name" />
        <input className="p-3 border rounded" placeholder="Email" type="email" />
        <input className="p-3 border rounded md:col-span-2" placeholder="Subject" />
        <textarea className="p-3 border rounded md:col-span-2" placeholder="Message" rows={4} />
      </div>
      <div className="mt-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Send message</button>
      </div>
    </form>
  );
}
