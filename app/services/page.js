import Container from "../components/common/Container";

export default function ServicesPage() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900">All Services</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Explore our transportation services. Select a category to learn more.
        </p>
      </Container>
    </section>
  );
}
