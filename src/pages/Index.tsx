import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: 'about', label: 'О мне', icon: 'User' },
    { id: 'fandoms', label: 'Фандомы', icon: 'Heart' },
    { id: 'kins', label: 'Кинны', icon: 'Sparkles' },
    { id: 'dni', label: 'DNI', icon: 'XCircle' },
    { id: 'byi', label: 'BYI', icon: 'Info' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <Icon name={section.icon} size={18} />
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              саня 🌻
            </h1>
            <p className="text-xl text-muted-foreground mb-6">подсолнух</p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Badge variant="outline" className="text-base">she/her</Badge>
              <Badge variant="outline" className="text-base">17 лет</Badge>
              <Badge variant="outline" className="text-base">2 апреля</Badge>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      <div className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <section 
            id="about" 
            ref={(el) => (sectionRefs.current['about'] = el)}
            className={`transition-all duration-700 ${
              visibleSections.has('about') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="User" size={28} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">О мне</CardTitle>
                    <CardDescription className="mt-1">Немного обо мне</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-lg font-semibold mb-2">йо, мои псевдо <span className="text-primary">саня</span> / <span className="text-primary">подсолнух</span> 🌻</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">she/her or any cis girl</Badge>
                      <Badge variant="secondary">17 лет</Badge>
                      <Badge variant="secondary">др 2 апреля</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          <section 
            id="fandoms" 
            ref={(el) => (sectionRefs.current['fandoms'] = el)}
            className={`transition-all duration-700 delay-100 ${
              visibleSections.has('fandoms') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Heart" size={28} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">Фандомы</CardTitle>
                    <CardDescription className="mt-1">Мои любимые вселенные</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>lololoshka</Badge>
                  <Badge>genshin impact</Badge>
                  <Badge>honkai star rail</Badge>
                  <Badge>pjsekai</Badge>
                  <Badge>cookie run kingdom</Badge>
                  <Badge>gacha (life, club, life 2)</Badge>
                  <Badge>wonderend0</Badge>
                  <Badge>danganronpa</Badge>
                  <Badge>ddlc</Badge>
                  <Badge>tiny bunny</Badge>
                  <Badge>tpoh</Badge>
                  <Badge>zeno remake</Badge>
                  <Badge>atomic heart</Badge>
                  <Badge>beyond: two souls</Badge>
                  <Badge>stardew valley</Badge>
                  <Badge>pressure (roblox)</Badge>
                  <Badge>kinito pet</Badge>
                  <Badge>alien stage</Badge>
                  <Badge>omori</Badge>
                  <Badge>mouthwashing</Badge>
                  <Badge>tadc</Badge>
                  <Badge>poppy playtime</Badge>
                  <Badge>amanda the adventurer</Badge>
                  <Badge>yttd</Badge>
                  <Badge>dead plate</Badge>
                  <Badge className="text-muted-foreground">... etc</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          <section 
            id="kins" 
            ref={(el) => (sectionRefs.current['kins'] = el)}
            className={`transition-all duration-700 delay-200 ${
              visibleSections.has('kins') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Sparkles" size={28} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">Кинны</CardTitle>
                    <CardDescription className="mt-1">Персонажи, с которыми я себя ассоциирую</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-base py-2 px-4">toya aoyagi</Badge>
                  <Badge variant="outline" className="text-base py-2 px-4">dylan</Badge>
                  <Badge variant="outline" className="text-base py-2 px-4">hajime hinata</Badge>
                  <Badge variant="outline" className="text-base py-2 px-4">xiao</Badge>
                  <Badge variant="outline" className="text-base py-2 px-4">kazuha</Badge>
                  <Badge variant="outline" className="text-base py-2 px-4">sunny</Badge>
                  <Badge variant="outline" className="text-base py-2 px-4">wooly</Badge>
                  <Badge variant="outline" className="text-base py-2 px-4">maybe aventurine</Badge>
                  <Badge variant="outline" className="text-base py-2 px-4">bronya</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          <section 
            id="dni" 
            ref={(el) => (sectionRefs.current['dni'] = el)}
            className={`transition-all duration-700 delay-300 ${
              visibleSections.has('dni') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="border-2 border-destructive/30 hover:border-destructive/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <Icon name="XCircle" size={28} className="text-destructive" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">DNI (Do Not Interact)</CardTitle>
                    <CardDescription className="mt-1">С кем я предпочитаю не взаимодействовать</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                    <Icon name="AlertCircle" size={18} className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-sm">база (базовые вещи типа гомофобии, педофилии, инцеста)</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                    <Icon name="AlertCircle" size={18} className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-sm">хейт моих любимых пейрингов/персонажей прямо при мне (можете ненавидеть, но не пишите этого мне)</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                    <Icon name="AlertCircle" size={18} className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-sm">18+ контент (прон, резня и тп) БЕЗ ПРЕДУПРЕЖДЕНИЯ / БЛЮРА</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          <section 
            id="byi" 
            ref={(el) => (sectionRefs.current['byi'] = el)}
            className={`transition-all duration-700 delay-[400ms] ${
              visibleSections.has('byi') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Info" size={28} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">BYI (Before You Interact)</CardTitle>
                    <CardDescription className="mt-1">Что важно знать при общении со мной</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Icon name="MessageCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Про общение</h4>
                        <p className="text-sm text-muted-foreground">я почти всегда в сети, потому стараюсь отвечать сразу. я много чего могу обсудить, но не тянуть всё на себе</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Icon name="User" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Характер</h4>
                        <p className="text-sm text-muted-foreground">могу сначала показаться стеснительной/не заинтересованной, однако это временно</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Icon name="XCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Что не нравится</h4>
                        <p className="text-sm text-muted-foreground">я не очень люблю тех, кто часто обижается на всякую ерунду, а так же тех, кто слишком активный/серьёзный, поэтому, если вы такие, то скипайте меня 💔</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Icon name="Heart" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Буду рада</h4>
                        <p className="text-sm text-muted-foreground">посидеть в рейве, поиграть в рб, пт или геншин, поставить парные аватарки или описания</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Главное</h4>
                        <p className="text-sm text-muted-foreground">я стараюсь уважать чужие интересы, пока вы уважаете мои</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <footer className="py-8 border-t border-border mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Создано с помощью poehali.dev
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;