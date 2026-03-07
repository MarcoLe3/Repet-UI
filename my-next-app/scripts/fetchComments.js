'use server';

import prisma from '@/lib/prisma';

export default async function fetchComments(componentId) {
    const comments = await prisma.Comment.findMany({
        where: {
            componentId: componentId
        },
        select: {
            id: true,
            author: true,
            published: true,
            content: true
        }
    });
    return comments;
}