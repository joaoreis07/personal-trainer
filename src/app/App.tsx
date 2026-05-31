import { motion } from "motion/react";
import {
  Star,
  Award,
  Users,
  Dumbbell,
  MessageCircle,
  ClipboardCheck,
  Calendar,
  Apple,
  TrendingUp,
  Instagram,
  Mail,
  Phone,
  CheckCircle2,
  Target,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import transformationImage from "../imports/image.png";

export default function App() {
  const whatsappNumber = "5511999999999";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* SEÇÃO 1 - HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1758875568932-0eefd3e60090?w=1920&h=1080&fit=crop&auto=format"
            alt="Personal trainer profissional"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeInUp}>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Personal Trainer de Alta Performance</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                {...fadeInUp}
              >
                Transforme seu corpo com{" "}
                <span className="text-primary">acompanhamento profissional</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                {...fadeInUp}
              >
                Treinos personalizados, acompanhamento contínuo e resultados reais para quem deseja emagrecer, ganhar massa muscular ou melhorar a performance.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                {...fadeInUp}
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-lg"
                >
                  <MessageCircle size={22} />
                  Falar no WhatsApp
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary/30 text-foreground px-8 py-4 rounded-lg font-bold hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <Calendar size={22} />
                  Agendar Avaliação
                </a>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {[
                  { icon: Users, value: "+500", label: "Alunos atendidos" },
                  { icon: Award, value: "+5 anos", label: "De experiência" },
                  { icon: Target, value: "100%", label: "Resultados comprovados" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={fadeInUp}
                  >
                    <stat.icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1758875568932-0eefd3e60090?w=600&h=800&fit=crop&auto=format"
                  alt="Personal trainer profissional em ação"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - SOBRE */}
      <section id="sobre" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            {...fadeInUp}
          >
            Quem será seu <span className="text-primary">treinador?</span>
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Conheça o profissional que vai guiar sua transformação
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/0 rounded-2xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1758875568932-0eefd3e60090?w=600&h=800&fit=crop&auto=format"
                alt="Personal Trainer profissional"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4] border border-border"
              />
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Formação Acadêmica</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Graduado em Educação Física com especialização em Treinamento de Alta Performance. Certificações internacionais em Musculação Avançada e Nutrição Esportiva.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Certificações</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        CREF - Conselho Regional de Educação Física
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Personal Trainer Internacional - ISSA
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Nutrição Esportiva Avançada
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Experiência Profissional</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mais de 5 anos transformando vidas através do treinamento personalizado. Especialista em emagrecimento, hipertrofia muscular e preparação física. Acompanhamento individualizado com foco em resultados sustentáveis e mudança de hábitos.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - BENEFÍCIOS */}
      <section id="beneficios" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            {...fadeInUp}
          >
            Por que escolher <span className="text-primary">minha consultoria?</span>
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Um método completo e personalizado para você alcançar seus objetivos
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Dumbbell,
                title: "Treinos Personalizados",
                description: "Programas desenvolvidos especificamente para seu biotipo, objetivos e nível de condicionamento físico."
              },
              {
                icon: MessageCircle,
                title: "Suporte Direto pelo WhatsApp",
                description: "Tire dúvidas, envie vídeos dos treinos e receba feedback em tempo real."
              },
              {
                icon: ClipboardCheck,
                title: "Avaliação Física",
                description: "Análise completa com bioimpedância, medidas e testes funcionais para acompanhar sua evolução."
              },
              {
                icon: Calendar,
                title: "Acompanhamento Semanal",
                description: "Ajustes constantes no treino e orientações para garantir progresso contínuo."
              },
              {
                icon: Apple,
                title: "Planos Alimentares Orientativos",
                description: "Diretrizes nutricionais alinhadas aos seus objetivos e rotina diária."
              },
              {
                icon: TrendingUp,
                title: "Ajustes Constantes",
                description: "Treinamento evolutivo que se adapta ao seu progresso e necessidades."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                variants={fadeInUp}
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 4 - RESULTADOS */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            {...fadeInUp}
          >
            Resultados <span className="text-primary">reais</span>
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Transformações comprovadas de alunos que confiaram no método
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              variants={fadeInUp}
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <ImageWithFallback
                  src={transformationImage}
                  alt="Transformação real - antes e depois de aluna"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fernanda Rodrigues</h3>
                <p className="text-primary font-medium mb-2">5 meses de acompanhamento</p>
                <p className="text-muted-foreground">-15kg, definição muscular e mudança de hábitos</p>
              </div>
            </motion.div>

            {[
              {
                image: "https://images.unsplash.com/photo-1632482151451-ccf4baf7f6a3?w=400&h=500&fit=crop&auto=format",
                name: "Carlos Silva",
                time: "6 meses",
                result: "-18kg de gordura, +5kg de massa muscular"
              },
              {
                image: "https://images.unsplash.com/photo-1584952811178-17383f34d7f4?w=400&h=500&fit=crop&auto=format",
                name: "Rafael Oliveira",
                time: "8 meses",
                result: "+15kg de massa muscular magra"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                variants={fadeInUp}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={result.image}
                    alt={`Transformação de ${result.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{result.name}</h3>
                  <p className="text-primary font-medium mb-2">{result.time} de acompanhamento</p>
                  <p className="text-muted-foreground">{result.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 5 - DEPOIMENTOS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            {...fadeInUp}
          >
            O que meus <span className="text-primary">alunos dizem</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Ana Paula",
                image: "https://images.unsplash.com/photo-1549995546-87cb41aa98a4?w=100&h=100&fit=crop&auto=format",
                text: "Melhor investimento que fiz! Perdi 15kg e ganhei confiança. O acompanhamento é personalizado e funciona de verdade."
              },
              {
                name: "Thiago Mendes",
                image: "https://images.unsplash.com/photo-1632482151451-ccf4baf7f6a3?w=100&h=100&fit=crop&auto=format",
                text: "Treino há 3 meses e já vejo resultados incríveis. Suporte constante e treinos que se adaptam à minha rotina."
              },
              {
                name: "Juliana Rocha",
                image: "https://images.unsplash.com/photo-1584952807377-b52cbfc8aaec?w=100&h=100&fit=crop&auto=format",
                text: "Profissional excepcional! Me ajudou a conquistar o corpo que sempre sonhei. Recomendo de olhos fechados!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                variants={fadeInUp}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">Aluno(a)</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 6 - PLANOS */}
      <section id="planos" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            {...fadeInUp}
          >
            Escolha o <span className="text-primary">plano ideal</span>
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Planos flexíveis que se adaptam aos seus objetivos e rotina
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Básico",
                popular: false,
                features: [
                  "Treino personalizado",
                  "Atualização mensal",
                  "Avaliação inicial",
                  "Suporte por email"
                ]
              },
              {
                name: "Premium",
                popular: true,
                features: [
                  "Treino personalizado",
                  "Suporte WhatsApp direto",
                  "Atualizações semanais",
                  "Plano alimentar orientativo",
                  "Avaliação física mensal",
                  "Ajustes ilimitados"
                ]
              },
              {
                name: "Elite",
                popular: false,
                features: [
                  "Tudo do Premium",
                  "Acompanhamento completo",
                  "Consultoria premium",
                  "Prioridade no atendimento",
                  "Suplementação orientativa",
                  "Acesso a conteúdo exclusivo"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-8 relative ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary to-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 md:scale-105 border-2 border-primary"
                    : "bg-card border-2 border-border hover:border-primary/50 transition-all"
                }`}
                variants={fadeInUp}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background text-primary px-5 py-2 rounded-full text-sm font-bold border-2 border-primary shadow-lg">
                    ⭐ MAIS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-6 text-center pt-2">{plan.name}</h3>
                <ul className="space-y-4 mb-8 min-h-[240px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                      <span className={plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-lg text-center font-bold transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-background text-primary hover:bg-background/90 shadow-lg"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Contratar Agora
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 7 - CHAMADA FINAL */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1758875569334-27579a49ed0b?w=1920&h=600&fit=crop&auto=format)`,
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
          >
            Comece sua <span className="text-primary">transformação hoje</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-12"
            {...fadeInUp}
          >
            Agende sua avaliação e descubra o plano ideal para atingir seus objetivos.
          </motion.p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-6 rounded-lg text-xl font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-2xl shadow-primary/30"
            {...fadeInUp}
          >
            <MessageCircle size={28} />
            Falar no WhatsApp
          </motion.a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-primary">Personal Trainer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformando vidas através do fitness com acompanhamento profissional e personalizado.
              </p>
            </div>

            <div className="text-center">
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#sobre" className="hover:text-primary transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-primary transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-primary transition-colors">
                    Planos
                  </a>
                </li>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4 justify-center md:justify-end">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all hover:scale-110 group"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="mailto:contato@personaltrainer.com"
                  className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all hover:scale-110 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Personal Trainer de Alta Performance. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              Desenvolvido com foco em resultados e transformação
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}