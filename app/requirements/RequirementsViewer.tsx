import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default async function RequirementsViewer() {
    const filePath = path.join(process.cwd(), 'public/requirements.json');
    let data;

    try {
        const fileContents = await fs.readFile(filePath, 'utf-8');
        data = JSON.parse(fileContents);
    } catch (e) {
        console.error('Failed to load requirements:', e);
        notFound();
    }

    return (
        <ScrollArea className="h-screen p-4">
            <h1 className="text-3xl font-bold mb-6">📋 HBC Requirements Viewer</h1>
            <div className="flex gap-4 mb-6">
                <form action="/api/export-md">
                    <Button type="submit">📥 Export to Markdown</Button>
                </form>
            </div>
            {data.epics.map((epic) => (
                <Card key={epic.id} className="mb-6 p-4">
                    <h2 className="text-2xl font-semibold">{epic.id}: {epic.title}</h2>
                    {epic.features.map((feature) => (
                        <div key={feature.id} className="ml-4 mt-4">
                            <h3 className="text-xl font-medium">{feature.id}: {feature.title}</h3>
                            <ul className="list-disc ml-6 mt-2">
                                {feature.stories.map((story) => (
                                    <li key={story.id} className="mb-2">
                                        <strong>{story.id}:</strong> {story.title}<br />
                                        <em>{story.description}</em><br />
                                        <span className="text-sm text-muted-foreground">Priority: {story.priority} | Status: {story.status} | Estimate: {story.estimate_hours}h</span><br />
                                        <span className="text-sm text-muted-foreground">Tags: {story.labels.join(', ')}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Card>
            ))}
        </ScrollArea>
    );
}
