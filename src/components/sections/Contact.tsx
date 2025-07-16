import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ContactFormData } from '../../types';
import { AnimatedPage } from '../common/AnimationPage';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatedPage>
      <Section id="contactame" className="py-24">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#8B8D79' }}
        />

        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Natural cotton texture"
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
              Estoy aquí para ayudarte a transformar tu visión en realidad. Conversemos sobre
              tu proyecto y descubramos juntas cómo crear algo verdaderamente auténtico.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8" style={{ backgroundColor: '#EDDCC3', border: 'none' }}>
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 mr-6" style={{ color: '#565021' }} />
                  <div>
                    <h3 className="text-xl font-medium mb-2" style={{ color: '#565021' }}>Email</h3>
                    <p className="text-base opacity-80" style={{ color: '#524334' }}>
                      hola@gabrielaortiz.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8" style={{ backgroundColor: '#EDDCC3', border: 'none' }}>
                <div className="flex items-center mb-6">
                  <Phone className="w-8 h-8 mr-6" style={{ color: '#565021' }} />
                  <div>
                    <h3 className="text-xl font-medium mb-2" style={{ color: '#565021' }}>Teléfono</h3>
                    <p className="text-base opacity-80" style={{ color: '#524334' }}>
                      +52 (55) 1234-5678
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8" style={{ backgroundColor: '#EDDCC3', border: 'none' }}>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 mr-6" style={{ color: '#565021' }} />
                  <div>
                    <h3 className="text-xl font-medium mb-2" style={{ color: '#565021' }}>Ubicación</h3>
                    <p className="text-base opacity-80" style={{ color: '#524334' }}>
                      Ciudad de México, México
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8" style={{ backgroundColor: '#565021', border: 'none' }}>
                <h3 className="text-xl font-medium mb-6" style={{ color: '#EDDCC3' }}>
                  Sígueme en redes
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                  >
                    <Instagram className="w-6 h-6" style={{ color: '#EDDCC3' }} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" style={{ color: '#EDDCC3' }} />
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-10" style={{ backgroundColor: '#EDDCC3', border: 'none' }}>
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors resize-none"
                    style={{ backgroundColor: 'white', borderColor: '#CBBEBA' }}
                  />
                </div>

                <Button type="submit" size="lg" icon={Send} className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </AnimatedPage>
  );
}
