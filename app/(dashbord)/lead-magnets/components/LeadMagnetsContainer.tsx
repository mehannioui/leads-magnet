'use client';

import { Lead, LeadMagnet } from '@prisma/client';
import React from 'react';

interface LeadMagnetsContainerProps {
  leadMagnets: LeadMagnet[];
  leads: Lead[];
}

function LeadMagnetsContainer({
  leadMagnets,
  leads,
}: LeadMagnetsContainerProps) {
  console.log('leads from inside the client', leads);
  return <div>LeadMagnetsContainer</div>;
}

export default LeadMagnetsContainer;
