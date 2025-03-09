// Update this page (the content is just a fallback if you fail to update the page). Always include w-full and min-h-screen classes in the main element.
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">Welcome to Our Cake Shop</h1>
          <p className="text-lg text-muted-foreground">
            Discover the most delicious cakes made with love and care.
          </p>
          <Button className="mt-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg">
            Shop Now
          </Button>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Chocolate Delight</CardTitle>
              <CardDescription>Rich and creamy chocolate cake.</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://via.placeholder.com/300"
                alt="Chocolate Delight"
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter>
              <p className="text-lg font-semibold text-primary">$25.00</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vanilla Dream</CardTitle>
              <CardDescription>Light and fluffy vanilla cake.</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://via.placeholder.com/300"
                alt="Vanilla Dream"
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter>
              <p className="text-lg font-semibold text-primary">$20.00</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strawberry Bliss</CardTitle>
              <CardDescription>Fresh and fruity strawberry cake.</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://via.placeholder.com/300"
                alt="Strawberry Bliss"
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter>
              <p className="text-lg font-semibold text-primary">$22.00</p>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Index;