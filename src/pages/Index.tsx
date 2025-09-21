import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const bags = [
    {
      id: 1,
      name: 'Золотая классика',
      description: 'Элегантная сумка с золотистым бисером',
      price: '12 500 ₽',
      image: 'img/a5325230-0baa-4caf-b682-6f99caf48764.jpg'
    },
    {
      id: 2,
      name: 'Земляная гармония',
      description: 'Сумка в теплых коричневых тонах',
      price: '11 800 ₽',
      image: 'img/a29fba70-05a9-4825-aa2c-a70b74f46a39.jpg'
    },
    {
      id: 3,
      name: 'Винтажное очарование',
      description: 'Уникальный узор в стиле ретро',
      price: '13 200 ₽',
      image: 'img/a5325230-0baa-4caf-b682-6f99caf48764.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={24} className="text-primary" />
              <h1 className="text-2xl font-display font-semibold text-foreground">
                BEAD BAGS ATELIER
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
                Галерея
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                О нас
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </a>
            </nav>
            <Button variant="outline" className="hidden md:flex">
              <Icon name="ShoppingBag" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-warm-beige to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Эксклюзивные сумки
              <span className="block text-primary">из бисера</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Каждая сумка создается вручную с особым вниманием к деталям. 
              Уникальные узоры и высочайшее качество материалов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть коллекцию
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-foreground mb-4">
              Наша коллекция
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя уникальные бисерные сумки, созданные с любовью и мастерством
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bags.map((bag) => (
              <Card key={bag.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={bag.image} 
                    alt={bag.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-display font-semibold text-foreground mb-2">
                    {bag.name}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {bag.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {bag.price}
                    </span>
                    <Button variant="outline" size="sm">
                      <Icon name="Heart" size={16} className="mr-2" />
                      В избранное
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-warm-beige/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-display font-bold text-foreground mb-6">
                  О нашей мастерской
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Мы создаем уникальные бисерные сумки с 2015 года. Каждое изделие — 
                  это результат кропотливой ручной работы и творческого подхода.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-foreground">100% ручная работа</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-foreground">Качественные материалы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-foreground">Уникальные дизайны</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform rotate-3"></div>
                <img 
                  src="img/a29fba70-05a9-4825-aa2c-a70b74f46a39.jpg" 
                  alt="Процесс создания" 
                  className="relative rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-display font-bold text-foreground mb-6">
              Свяжитесь с нами
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Готовы создать для вас уникальную сумку или ответить на ваши вопросы
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Телефон</h4>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">info@beadbags.ru</p>
              </Card>
            </div>
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Sparkles" size={20} className="text-primary" />
              <span className="font-display font-semibold">BEAD BAGS ATELIER</span>
            </div>
            <p className="text-sm text-muted">
              © 2024 Bead Bags Atelier. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;