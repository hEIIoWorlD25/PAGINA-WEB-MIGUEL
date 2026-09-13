import { motion, AnimatePresence } from "framer-motion"
import { contactInfo } from "../data/contact"
import {
  X,
  CalendarDays,
  Gauge,
  Settings,
  Download,
  MessageCircle,
} from "lucide-react"

function TruckModal({ truck, onClose }) {
  if (!truck) return null

  const phone = contactInfo.phoneWhatsApp

  const message = encodeURIComponent(
  `Hola ${contactInfo.sellerName}, estoy interesado en el ${truck.marca} ${truck.modelo} publicado en la página de ${contactInfo.companyName}. ¿Podrías brindarme más información?`
)

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`

  return (
    <AnimatePresence>
      {truck && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-red-600 hover:text-white"
            >
              <X size={22} />
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[400px] overflow-hidden bg-gray-100 lg:min-h-[600px]">
                <img
                  src={truck.imagen}
                  alt={`${truck.marca} ${truck.modelo}`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  Disponible
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
                  {truck.marca}
                </p>

                <h2 className="mt-2 text-4xl font-black text-black">
                  {truck.modelo}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Revisa las características principales de esta unidad y
                  descarga su ficha técnica para conocer todos los detalles.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <CalendarDays size={21} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Año</p>
                      <p className="font-black text-black">
                        {truck.anio}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Gauge size={21} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Kilometraje
                      </p>
                      <p className="font-black text-black">
                        {truck.kilometraje}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Settings size={21} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Motor
                      </p>
                      <p className="font-black text-black">
                        {truck.motor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  <a
                    href={truck.ficha}
                    download
                    className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 font-bold text-white transition hover:bg-red-700"
                  >
                    <Download size={19} />
                    Descargar ficha técnica
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 px-5 py-4 font-bold text-red-600 transition hover:bg-red-50"
                  >
                    <MessageCircle size={19} />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TruckModal