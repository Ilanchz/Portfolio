export default function Contact() {
    return (
      <section>
        <h2 className="text-3xl font-bold">Contact</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" id="name" className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" className="mt-1 p-2 border border-gray-300 rounded w-full"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
      </section>
    );
  }
  