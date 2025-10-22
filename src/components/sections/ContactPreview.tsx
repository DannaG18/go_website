import { useState, FormEvent, ChangeEvent } from 'react';
import { Listbox } from "@headlessui/react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ContactFormData } from '../../types';
import { SERVICES } from '../../utils/constants';

export function ContactPreview() {
  const FORM_ENDPOINT = 'https://formspree.io/f/xldpkyen'; // <-- Replace this

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSelected(null);
      } else {
        setStatus('error');
        console.error('Formspree Error:', result);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const [selected, setSelected] = useState<{ id: string; title: string } | null>(null);

  return (
    <section id="contacto-preview" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: '#1C2218' }} />

      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Textura natural de lino"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: '#EDDCC3' }}>
            Contáctame
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#CBB186' }} />
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
            Estoy aquí para ayudarte a transformar tu visión en realidad. Conversemos sobre
            tu proyecto y descubramos juntas cómo crear algo verdaderamente auténtico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Card className="p-8" style={{ backgroundColor: '#C8BAAA', border: 'none' }}>
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 mr-6" style={{ color: '#291509' }} />
                <div>
                  <h3 className="text-2xl font-medium mb-2" style={{ color: '#291509' }}>Email</h3>
                  <a href="mailto:sgabrielaortiz@gmail.com?subject=Consulta&body=Hola, quiero más información.">
                    <p className="text-m opacity-90" style={{ color: '#352c36ff' }}>
                      sgabrielaortiz@gmail.com
                    </p>
                  </a>
                  <p className='text-sm opacity-60' style={{ color: '#392f3aff' }}>Respondo personalmente cada mensaje</p>
                </div>
              </div>
            </Card>

            <Card className="p-8" style={{ backgroundColor: '#C8BAAA', border: 'none' }}>
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 mr-6" style={{ color: '#291509' }} />
                <div>
                  <h3 className="text-2xl font-medium mb-2" style={{ color: '#291509' }}>Teléfono</h3>
                  <a href="tel:+573204033404">
                    <p className="text-base opacity-80" style={{ color: '#352c36ff' }}>
                      +57 (320) 403-3404
                    </p>
                  </a>
                  <p className='text-sm opacity-60' style={{ color: '#392f3aff' }}>Lun - Vie, 8:00 - 17:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-8" style={{ backgroundColor: '#C8BAAA', border: 'none' }}>
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 mr-6" style={{ color: '#291509' }} />
                <div>
                  <h3 className="text-2xl font-medium mb-2" style={{ color: '#291509' }}>Ubicación</h3>
                  <a
                    href="https://www.google.com/maps/place/C%C3%BAcuta,+Norte+de+Santander"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-base opacity-80" style={{ color: '#352c36ff' }}>
                      Cúcuta, Norte de Santander - CO
                    </p>
                  </a>
                  <p className='text-sm opacity-60' style={{ color: '#392f3aff' }}>Reuniones con cita previa</p>
                </div>
              </div>
            </Card>

            <Card className="p-8" style={{ backgroundColor: '#8B8D79', border: 'none' }}>
              <h3 className="text-2xl font-medium mb-6" style={{ color: '#EDDCC3' }}>
                Sígueme en redes
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/sgabrielaortiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  <Instagram className="w-6 h-6" style={{ color: '#EDDCC3' }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriela-ortiz-79550b367/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  <Linkedin className="w-6 h-6" style={{ color: '#EDDCC3' }} />
                </a>
                <a
                  href="https://www.youtube.com/@sgabrielaortiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  <Youtube className="w-6 h-6" style={{ color: '#EDDCC3' }} />
                </a>
              </div>
            </Card>
          </div>
          {/* Formulario de contacto */}
          <Card className="p-10" style={{ backgroundColor: '#EDDCC3', border: 'none' }}>
            <h3 className="text-3xl font-medium mb-8" style={{ color: '#291509' }}>
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-m font-medium mb-3" style={{ color: '#291509' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
                    style={{
                      backgroundColor: 'white',
                      borderColor: '#C8BAAA',
                      // focusRingColor: '#565021' 
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-m font-medium mb-3" style={{ color: '#291509' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
                    style={{
                      backgroundColor: 'white',
                      borderColor: '#C8BAAA',
                      // focusRingColor: '#565021' 
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-m font-medium mb-3"
                  style={{ color: "#291509" }}
                >
                  Servicio de interés
                </label>

                <Listbox
                  value={selected}
                  onChange={(value) => {
                    setSelected(value);
                    setFormData({
                      ...formData,
                      subject: value ? value.title : "", // 👈 sincroniza con formData.subject
                    });
                  }}
                >
                  <div className="relative">
                    {/* Botón */}
                    <Listbox.Button
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#800020] bg-white"
                      style={{ borderColor: "#C8BAAA" }}
                    >
                      {selected ? selected.title : "Selecciona un servicio"}
                    </Listbox.Button>

                    {/* Opciones */}
                    <Listbox.Options className="absolute mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200 z-10">
                      {/* Placeholder */}
                      <Listbox.Option
                        key="placeholder"
                        value={null}
                        disabled
                        className="cursor-not-allowed px-4 py-2 text-gray-400"
                      >
                        Selecciona un servicio
                      </Listbox.Option>

                      {/* Servicios */}
                      {SERVICES.map((service) => (
                        <Listbox.Option
                          key={service.id}
                          value={service}
                          className={({ active, selected }) =>
                            `cursor-pointer px-4 py-2 ${active
                              ? "bg-[#800020] text-white"
                              : selected
                                ? "bg-[#291509] text-white"
                                : "text-gray-800"
                            }`
                          }
                        >
                          {service.title}
                        </Listbox.Option>
                      ))}

                      {/* Opción Otro */}
                      <Listbox.Option
                        key="otro"
                        value={{ id: "otro", title: "Otro" }}
                        className={({ active, selected }) =>
                          `cursor-pointer px-4 py-2 ${active
                            ? "bg-[#800020] text-white"
                            : selected
                              ? "bg-[#800020] text-white"
                              : "text-gray-800"
                          }`
                        }
                      >
                        Otro
                      </Listbox.Option>
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>


              <div>
                <label htmlFor="message" className="block text-m font-medium mb-3" style={{ color: '#291509' }}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors resize-none"
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#C8BAAA',
                    // focusRingColor: '#565021' 
                  }}
                />
              </div>
              {status !== 'idle' && (
                <div className="text-sm text-center" aria-live="polite">
                  {status === 'sending' && <p className="text-yellow-600">Enviando mensaje...</p>}
                  {status === 'success' && <p className="text-green-600">¡Mensaje enviado con éxito!</p>}
                  {status === 'error' && <p className="text-red-600">Error al enviar. Intenta nuevamente.</p>}
                </div>
              )}

              <Button type="submit" size="lg" icon={Send} className="w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </Card>
        </div>
      </div >
    </section >
  );
}

