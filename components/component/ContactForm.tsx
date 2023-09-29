"use client"

const ContactForm = () => {
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-start">
      <div className="flex mt-8 flex-col md:flex-row">
        <div>
          <label htmlFor="" className="w-full">
            Nombre:
            <input
              type="text"
              name="name"
            
            />
          </label>
        </div>
        <div>
          <label className="w-full">
            Teléfono:
            <input
              type="tel"
              name="phone"
              
            />
          </label>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="" className="w-full">
          Email:
          <input
            type="email"
            name="email"
           
          />
        </label>
      </div>
      </div>
      <button type="submit" className=" bg-[#1E6FFF] text-white py-4 px-24 rounded-[15px] font-semibold mt-8">Enviar</button>
    </form>
  )
}

export default ContactForm