import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";

const Index = () => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 mt-16">
          <section className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 text-primary animate-fade-in-up">Welcome to Our Cake Shop</h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up delay-200">
              Discover the most delicious cakes made with love and care.
            </p>
            <Button className="mt-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg animate-fade-in-up delay-400 hover:scale-105 transition-transform">
              Shop Now
            </Button>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Our Featured Cakes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CakeCard
                imageUrl="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                title="Chocolate Delight"
                price="$25.00"
                description="Rich and creamy chocolate cake with layers of ganache and fresh berries."
                delay={100}
              />

              <CakeCard
                imageUrl="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80"
                title="Vanilla Dream"
                price="$20.00"
                description="Light and fluffy vanilla cake with buttercream frosting and edible flowers."
                delay={300}
              />

              <CakeCard
                imageUrl="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                title="Strawberry Bliss"
                price="$22.00"
                description="Fresh and fruity strawberry cake with cream cheese frosting and seasonal berries."
                delay={500}
              />
            </div>
          </section>
          
          {/* About Section */}
          <section className="mb-16 p-8 bg-secondary rounded-lg shadow-md animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up delay-200">
              <p className="mb-4">We are a family-owned bakery dedicated to creating delicious, handcrafted cakes for all occasions.</p>
              <p className="mb-4">Our recipes have been passed down through generations, and we use only the finest ingredients to ensure quality in every bite.</p>
              <p>From birthdays to weddings, our cakes are made with love and attention to detail.</p>
            </div>
          </section>

          {/* Contact Section with Icons */}
          <section id="contact" className="mt-16 p-8 bg-secondary rounded-lg shadow-md animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 animate-fade-in-left delay-200">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@coniecakes.com" className="text-primary hover:underline">info@coniecakes.com</a>
              </div>
              <div className="flex items-center gap-2 animate-fade-in-right delay-400">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+71234567890" className="text-primary hover:underline">+7 123 456 7890</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;