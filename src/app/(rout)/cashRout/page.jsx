import React, { Suspense } from 'react';
import Cashout from '@/components/cashout/cashout';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Cashout />
    </Suspense>
  );
}
