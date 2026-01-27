import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function SupportSuccess() {
  return (
    <Container className="py-12 md:py-20">
      <Card className="text-center py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-[var(--foreground)] mb-4">
          Thank you.
        </h1>
        <p className="text-lg text-[var(--foreground)]/80 mb-8 max-w-md mx-auto">
          Your support helps us reach more people with real hope in Jesus.
        </p>
        <Button href="/support" variant="primary">
          Back to Support
        </Button>
      </Card>
    </Container>
  );
}
