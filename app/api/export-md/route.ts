import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public/requirements.json');
    try {
        const raw = await fs.readFile(filePath, 'utf-8');
        const json = JSON.parse(raw);
        let markdown = '# HBC Requirements\n\n';

        for (const epic of json.epics) {
            markdown += `## ${epic.id}: ${epic.title}\n\n`;
            for (const feat of epic.features) {
                markdown += `### ${feat.id}: ${feat.title}\n\n`;
                for (const story of feat.stories) {
                    markdown += `- **${story.id}**: ${story.title}\n`;
                    markdown += `  - _${story.description}_\n`;
                    markdown += `  - Priority: ${story.priority}, Status: ${story.status}, Estimate: ${story.estimate_hours}h\n`;
                    markdown += `  - Tags: ${story.labels.join(', ')}\n\n`;
                }
            }
        }

        return new NextResponse(markdown, {
            headers: {
                'Content-Type': 'text/markdown',
                'Content-Disposition': 'attachment; filename=\"hbc-requirements.md\"'
            }
        });
    } catch (err) {
        return NextResponse.json({ error: 'Failed to export markdown' }, { status: 500 });
    }
}
