/**
 * Button Component - Shared Component Library
 * 
 * Props:
 * - children: Button text or nested elements
 * - variant: 'primary' | 'secondary' | 'destructive'
 * - isLoading: boolean (shows spinner and disables interaction)
 * - disabled: boolean (dims opacity and disables interaction)
 * - onClick: mouse click event handler
 * - type: HTML button type ('button', 'submit', 'reset')
 */

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'destructive';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  disabled = false, 
  onClick, 
  type = 'button' 
}: ButtonProps) {
  // Meets 44x44px minimum tap target and provides focus indicators
  const baseStyles = "w-full min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base active:scale-[0.98]";

  // Palette mappings using project @theme color tokens
  const variants = {
    primary: "bg-navy text-white hover:opacity-90",
    secondary: "bg-teal text-white hover:opacity-90",
    destructive: "bg-coral text-navy hover:opacity-90",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant] || variants.primary}`}
    >
      {isLoading ? (
        <>
          <svg 
            className="animate-spin h-5 w-5 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}