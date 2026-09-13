import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { contactInfo } from "../data/contact"

function Contact() {
  const phone = contactInfo.phoneWhatsApp

  const message = encodeURIComponent(
    "Hola Miguel Angel, estoy interesado en uno de los camiones publicados en la página de Almacenes Santa Clara."
  )

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-red-600 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Contacto directo
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            ¿Encontraste el camión
            <span className="block">
              que necesitas?
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Comunícate directamente con Miguel Angel Cumpa Cajo para consultar
            disponibilidad, características de las unidades y coordinar una
            atención personalizada.
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-black text-red-600 shadow-xl transition hover:bg-gray-100"
          >
            <MessageCircle size={22} />
            Contactar por WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] bg-white p-8 text-black shadow-2xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
            Almacenes Santa Clara
          </p>

          <h3 className="mt-3 text-3xl font-black">
            {contactInfo.sellerName}
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Atención para consultas sobre las unidades disponibles y sus fichas
            técnicas.
          </p>

          <div className="mt-8 space-y-6">

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Phone size={21} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Teléfono
                </p>

                <p className="mt-1 font-bold">
                  {contactInfo.phoneDisplay}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Mail size={21} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Correo
                </p>

                <p className="mt-1 font-bold">
                  {contactInfo.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Empresa
                </p>

                <p className="mt-1 font-bold">
                  {contactInfo.companyName}
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
    </section>
  )
}

export default Contact