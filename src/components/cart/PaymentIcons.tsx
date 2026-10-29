import * as React from "react";

export function PayPalIcon({ className = "h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.2 5.5H20.5C23.6 5.5 25.5 7.1 24.9 10.3C24.3 13.1 22.1 14.8 19.3 14.8H16.2L14.7 22H11L13.2 5.5Z"
        fill="#003087"
      />
      <path
        d="M16.5 8.5H23.5C26.5 8.5 28.3 10.1 27.8 13.1C27.2 16.1 24.9 17.8 22 17.8H19.1L18 23.5H14.5L16.5 8.5Z"
        fill="#0079C1"
      />
      <path
        d="M19.1 14.8C19.3 14.8 19.4 14.8 19.6 14.8C22.4 14.8 24.6 13.1 25.2 10.3C25.3 9.7 25.3 9.1 25.1 8.5C24.7 8.5 24.1 8.5 23.5 8.5H16.5L16.2 10.5L16.2 14.8H19.1Z"
        fill="#002069"
      />
    </svg>
  );
}

export function MastercardIcon({ className = "h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="12" r="8" fill="#EB001B" />
      <circle cx="23" cy="12" r="8" fill="#F79E1B" fillOpacity="0.9" />
      <path
        d="M18 6.4C19.8 7.8 21 10 21 12C21 14 19.8 16.2 18 17.6C16.2 16.2 15 14 15 12C15 10 16.2 7.8 18 6.4Z"
        fill="#FF5F00"
      />
    </svg>
  );
}

export function VisaIcon({ className = "h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2"
        y="17"
        fontFamily="sans-serif"
        fontSize="14"
        fontWeight="bold"
        fontStyle="italic"
        letterSpacing="0.05em"
        fill="#1A1F71"
      >
        VISA
      </text>
    </svg>
  );
}

export function ApplePayIcon({ className = "h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 46 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Apple Logo */}
      <path d="M12.1 9.4c-.4.5-1 .8-1.7.7-.1-.7.2-1.4.6-1.9.4-.5 1.1-.9 1.7-.8.1.7-.2 1.4-.6 2zm.6.9c-.9 0-1.7-.5-2.2-.5-.5 0-1.2.5-1.9.5-1 0-2-.6-2.5-1.5-1.1-1.9-.3-4.6 8-4.6.8 0 1.5.5 1.9.5.4 0 1.2-.6 2.2-.5.4 0 1.5.1 2.2 1.2-1.9 1.1-1.6 3.4.3 4.2-.4 1.1-1 2.2-1.8 3.1-.7 1-1.4 2-2.5 2-.5 0-1-.3-1.6-.3-.6 0-1.2.3-1.7.3-1.1 0-1.8-1-2.5-2-.9-1.2-1.5-2.8-1.5-4.4 0-2.6 1.7-4 3.3-4 .9 0 1.7.6 2.2.6.5 0 1.4-.6 2.4-.6.8 0 1.5.2 2.1.6-.2.2-.4.4-.5.6z" />
      <text x="21" y="17" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill="currentColor">
        Pay
      </text>
    </svg>
  );
}

export function GooglePayIcon({ className = "h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* G icon */}
      <text x="3" y="17" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#4285F4">
        G
      </text>
      <text x="18" y="17" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill="#5F6368">
        Pay
      </text>
    </svg>
  );
}

export function PaymentMethodsRow() {
  return (
    <div className="flex items-center justify-center gap-4 text-stone-700 py-1 opacity-80 hover:opacity-100 transition-opacity">
      <div className="h-5 flex items-center justify-center">
        <PayPalIcon className="h-4.5 w-auto" />
      </div>
      <div className="h-5 flex items-center justify-center">
        <MastercardIcon className="h-4.5 w-auto" />
      </div>
      <div className="h-5 flex items-center justify-center">
        <VisaIcon className="h-4.5 w-auto" />
      </div>
      <div className="h-5 flex items-center justify-center text-stone-900">
        <ApplePayIcon className="h-4.5 w-auto" />
      </div>
      <div className="h-5 flex items-center justify-center">
        <GooglePayIcon className="h-4.5 w-auto" />
      </div>
    </div>
  );
}

