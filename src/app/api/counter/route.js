import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://api.counterapi.dev/v1/shaoli-christmas/visits');
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Counter API error:', error);
        return NextResponse.json({ error: 'Failed to fetch counter' }, { status: 500 });
    }
}

export async function POST() {
    try {
        const response = await fetch('https://api.counterapi.dev/v1/shaoli-christmas/visits/up');
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Counter API error:', error);
        return NextResponse.json({ error: 'Failed to increment counter' }, { status: 500 });
    }
}
