import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "lucide-react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    price: number;
    features: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-24  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card className="cursor-pointer ">
            <CardTitle>{item.title}</CardTitle>
            <CardPrice>${item.price}</CardPrice>
            {/* <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nostrum o
            </CardDescription> */}
            <CardFeatures>
              {item.features.map((feature, idx) => (
                <>
                  <li className="flex gap-2 mb-2" key={idx}>
                    <CheckIcon size={16} />
                    {feature}
                  </li>
                </>
              ))}
            </CardFeatures>
            <CardBottom />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-100 text-sm tracking-wide break-all w-max ", // Added w-full
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold text-3xl tracking-wide ",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardPrice = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-zinc-400 mt-2 text-4xl font-bold", className)}>
      {children}
    </p>
  );
};
export const CardFeatures = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <ul className={cn("mt-4 text-zinc-400 text-sm", className)}>{children}</ul>
  );
};
export const CardBottom = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/#"
      className={cn(
        " mt-4 text-sm font-bold text-black p-2  bg-white flex items-center justify-center rounded-lg border dark:border-white/[0.2]",
        className
      )}
    >
      Get Started Now
    </Link>
  );
};
