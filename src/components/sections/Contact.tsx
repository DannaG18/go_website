import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ContactFormData } from '../../types';
import { AnimatedPage } from '../common/AnimationPage';

export function Contact() {
  const FORM_ENDPOINT = 'https://formspree.io/f/mrblgvzn'; // <-- Replace this

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
      } else {
        setStatus('error');
        console.error('Formspree Error:', result);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatedPage>
      <Section id="contactame" className="py-24">
        <div className="absolute inset-0" style={{ backgroundColor: '#6b6b5bff' }} />
        <div className="absolute inset-0 opacity-5">
          <img src="/PajaTexture.jpg" alt="Textura natural" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Fondo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: '#EDDCC3' }}>
              Contáctame
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#CBB186' }} />
            <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90" style={{ color: '#EDDCC3' }}>
              Estoy aquí para ayudarte a transformar tu visión en realidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Cards */}
            <div className="space-y-8">
              <Card className="p-8" style={{ backgroundColor: '#EDDCC3' }}>
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 mr-6" style={{ color: '#565021' }} />
                  <div>
                    <h3 className="text-xl font-medium mb-2" style={{ color: '#565021' }}>Email</h3>
                    <a href="mailto:sgabrielaortiz@gmail.com?subject=Consulta&body=Hola, quiero más información.">
                      <p style={{ color: '#524334' }}>sgabrielaortiz@gmail.com</p>
                    </a>
                    <p className='text-sm' style={{ color: '#7d654eff' }}>Respondo personalmente cada mensaje</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8" style={{ backgroundColor: '#EDDCC3' }}>
                <div className="flex items-center mb-6">
                  <Phone className="w-8 h-8 mr-6" style={{ color: '#565021' }} />
                  <div>
                    <h3 className="text-xl font-medium mb-2" style={{ color: '#565021' }}>Teléfono</h3>
                    <a href="tel:+573204033404">
                      <p style={{ color: '#524334' }}>+57 (320) 403-3404</p>
                    </a>
                    <p className='text-sm' style={{ color: '#7d654eff' }}>Lun - Vie, 8:00 - 17:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8" style={{ backgroundColor: '#EDDCC3' }}>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 mr-6" style={{ color: '#565021' }} />
                  <div>
                    <h3 className="text-xl font-medium mb-2" style={{ color: '#565021' }}>Ubicación</h3>
                    <a
                      href="https://www.google.com/maps/place/C%C3%BAcuta,+Norte+de+Santander"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p style={{ color: '#524334' }}>Cúcuta, Norte de Santander, CO</p>
                    </a>
                    <p className='text-sm' style={{ color: '#7d654eff' }}>Reuniones con cita previa</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8" style={{ backgroundColor: '#565021' }}>
                <h3 className="text-xl font-medium mb-6" style={{ color: '#EDDCC3' }}>Sígueme en redes</h3>
                <div className="flex space-x-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Instagram className="w-6 h-6" style={{ color: '#EDDCC3' }} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Linkedin className="w-6 h-6" style={{ color: '#EDDCC3' }} />
                  </a>
                  {/* <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                  >
                    <Youtube className="w-6 h-6" style={{ color: '#EDDCC3' }} />
                  </a> */}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-10" style={{ backgroundColor: '#EDDCC3' }}>
              <h3 className="text-2xl font-medium mb-8" style={{ color: '#565021' }}>
                Envíame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3" style={{ color: '#565021' }}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-sm"
                      style={{ backgroundColor: 'white', borderColor: '#CBBEBA' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3" style={{ color: '#565021' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-sm"
                      style={{ backgroundColor: 'white', borderColor: '#CBBEBA' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-3" style={{ color: '#565021' }}>
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-sm"
                    style={{ backgroundColor: 'white', borderColor: '#CBBEBA' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3" style={{ color: '#565021' }}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-sm resize-none"
                    style={{ backgroundColor: 'white', borderColor: '#CBBEBA' }}
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
        </div>
      </Section>
    </AnimatedPage>
  );
}
