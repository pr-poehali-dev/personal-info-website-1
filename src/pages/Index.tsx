import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'О мне', icon: 'User' },
    { id: 'fandoms', label: 'Фандомы', icon: 'Heart' },
    { id: 'kins', label: 'Кинны', icon: 'Sparkles' },
    { id: 'dni', label: 'DNI', icon: 'XCircle' },
    { id: 'byi', label: 'BYI', icon: 'Info' },
  ];

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

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <section id="about" className="animate-fade-in">
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
                <p className="text-muted-foreground leading-relaxed">
                  Привет! Это мой личный сайт, где я делюсь информацией о себе, своих интересах и предпочтениях.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Креативный</Badge>
                  <Badge variant="secondary">Открытый</Badge>
                  <Badge variant="secondary">Дружелюбный</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          <section id="fandoms" className="animate-fade-in">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <h4 className="font-semibold mb-1">Аниме</h4>
                    <p className="text-sm text-muted-foreground">Мои любимые аниме-сериалы</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <h4 className="font-semibold mb-1">Игры</h4>
                    <p className="text-sm text-muted-foreground">Видеоигры, в которые я играю</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <h4 className="font-semibold mb-1">Книги</h4>
                    <p className="text-sm text-muted-foreground">Любимые литературные произведения</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <h4 className="font-semibold mb-1">Сериалы</h4>
                    <p className="text-sm text-muted-foreground">Интересные сериалы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          <section id="kins" className="animate-fade-in">
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
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/20 rounded">
                        <Icon name="Star" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Персонаж 1</h4>
                        <p className="text-sm text-muted-foreground">Описание персонажа и почему с ним ассоциация</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/20 rounded">
                        <Icon name="Star" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Персонаж 2</h4>
                        <p className="text-sm text-muted-foreground">Описание персонажа и почему с ним ассоциация</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          <section id="dni" className="animate-fade-in">
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
                    <span className="text-sm">Люди, распространяющие негатив и токсичность</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                    <Icon name="AlertCircle" size={18} className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-sm">Те, кто не уважает личные границы</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                    <Icon name="AlertCircle" size={18} className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-sm">Пользователи, занимающиеся троллингом</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          <section id="byi" className="animate-fade-in">
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
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Я ценю уважение</h4>
                        <p className="text-sm text-muted-foreground">Взаимное уважение - основа хорошего общения</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Могу отвечать не сразу</h4>
                        <p className="text-sm text-muted-foreground">Иногда мне нужно время на ответ</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Открыт к дружелюбному общению</h4>
                        <p className="text-sm text-muted-foreground">Всегда рад позитивным разговорам</p>
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
