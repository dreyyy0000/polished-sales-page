interface CTAButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const CTAButton = ({ text, href = "#checkout", className = "" }: CTAButtonProps) => {
  return (
    <a 
      href={href}
      className={`cta-button animate-pulse-glow ${className}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;
