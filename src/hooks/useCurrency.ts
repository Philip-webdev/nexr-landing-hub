import { useState, useEffect } from 'react';

interface CurrencyData {
  symbol: string;
  code: string;
  rate: number;
}

const CURRENCIES: Record<string, CurrencyData> = {
  NG: { symbol: '₦', code: 'NGN', rate: 1500 },
  ZA: { symbol: 'R', code: 'ZAR', rate: 18 },
  KE: { symbol: 'KSh', code: 'KES', rate: 155 },
  GH: { symbol: 'GH₵', code: 'GHS', rate: 15 },
  EG: { symbol: 'E£', code: 'EGP', rate: 48 },
  TZ: { symbol: 'TSh', code: 'TZS', rate: 2500 },
  UG: { symbol: 'USh', code: 'UGX', rate: 3700 },
  IN: { symbol: '₹', code: 'INR', rate: 83 },
  GB: { symbol: '£', code: 'GBP', rate: 0.79 },
  EU: { symbol: '€', code: 'EUR', rate: 0.92 },
  JP: { symbol: '¥', code: 'JPY', rate: 155 },
  BR: { symbol: 'R$', code: 'BRL', rate: 5 },
  MX: { symbol: 'MX$', code: 'MXN', rate: 17 },
  PH: { symbol: '₱', code: 'PHP', rate: 56 },
  PK: { symbol: 'Rs', code: 'PKR', rate: 280 },
  US: { symbol: '$', code: 'USD', rate: 1 },
  CA: { symbol: 'CA$', code: 'CAD', rate: 1.36 },
  AU: { symbol: 'A$', code: 'AUD', rate: 1.53 },
};

const DEFAULT: CurrencyData = { symbol: '$', code: 'USD', rate: 1 };

export function useCurrency() {
  const [currency, setCurrency] = useState<CurrencyData>(DEFAULT);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        const code = data.country_code;
        if (code && CURRENCIES[code]) {
          setCurrency(CURRENCIES[code]);
        } else if (data.continent_code === 'AF') {
          setCurrency(CURRENCIES.NG);
        }
      })
      .catch(() => {});
  }, []);

  const convert = (usd: number): string => {
    const converted = Math.round(usd * currency.rate);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  return { currency, convert };
}
