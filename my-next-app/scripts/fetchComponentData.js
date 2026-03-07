'use server';
import prisma from '@/lib/prisma';
import {cache} from 'react';

export const fetchComponentData = cache(async () => {
    const component_data = await prisma.Component.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            published: true,
        },
    });

    return component_data;
});

export const fetchSpecificComponentData = cache(async (query) => {
    const component_data = await prisma.Component.findUnique({
        where: { 
            id: query
         },
        select: {
            id: true,
            title: true,
            content: true,
            published: true,
            type: true,
            props: true,
        },
    });

    return component_data;
});