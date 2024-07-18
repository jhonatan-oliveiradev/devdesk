import ResponsiveImage from "@/components/responsive-image";

export interface AdvantageProps {
  image: any;
  title: string;
  subtitle: string;
  invert?: boolean;
}

const Advantage = (props: AdvantageProps) => {
  return (
    <div
      id="adv-item"
      className={`flex w-full flex-col items-center justify-around gap-24 py-20 ${props.invert ? "sm:flex-row-reverse" : "sm:flex-row"}`}
    >
      <ResponsiveImage
        image={props.image}
        className={`shadow-xl ${props.invert ? "sm:rotate-6" : "sm:-rotate-6"}`}
      />
      <div className="flex flex-col gap-y-6 text-center sm:w-[350px] sm:text-left">
        <h2 className="flex flex-col text-2xl font-black text-primary sm:text-4xl">
          {props.title}
        </h2>

        <p className="text-base font-light text-muted-foreground sm:text-lg">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Advantage;
