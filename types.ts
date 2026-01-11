
// Fix: Import React to resolve 'Cannot find namespace "React"' error.
import React from 'react';

export interface IndustrySolution {
    name: string;
    description: string;
    icon: React.ReactNode;
}
