import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

interface PlanProps {
  title: string;
  price: string;
  features: FeaturesProps[];
  cta: string;
  emphasis?: boolean;
  recommended?: boolean;
}

interface FeaturesProps {
  feature: string;
}

const Plan = (props: PlanProps) => {
  return (
    <Card
      className={`flex h-auto min-h-[384px] w-96 flex-col shadow-sm ${props.emphasis && "shadow-primary xl:h-[420px]"}`}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg font-black text-primary">
          {props.title}
          {props.recommended && (
            <span>
              <Badge>RECOMENDADO</Badge>
            </span>
          )}
        </CardTitle>
        <CardDescription className="text-primary-foreground">
          <span className="font-bold">Preço: </span>
          {props.price}
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-grow flex-col items-start justify-center">
        <span className="font-bold text-primary">Features:</span>
        <ul className="text-muted-foreground">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="mt-1 size-4 text-green-500" />
              {feature.feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex items-end justify-center pt-6">
        <Button
          variant="secondary"
          className={`w-full self-baseline ${props.emphasis && "bg-primary"}`}
        >
          {props.cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Plan;
