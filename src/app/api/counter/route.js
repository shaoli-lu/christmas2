import { NextResponse } from 'next/server';

const COUNTER_WORKSPACE = process.env.COUNTER_API_WORKSPACE || 'test';
const COUNTER_NAME = process.env.COUNTER_API_NAME || 'test';
const COUNTER_BASE_URL = `https://api.counterapi.dev/v2/${COUNTER_WORKSPACE}/${COUNTER_NAME}`;

function normalizeCounterPayload(payload) {
    const data = payload?.data ?? payload ?? {};
    const count = data?.count ?? data?.up_count ?? data?.total ?? 0;

    return {
        count,
        ...data,
    };
}

export async function GET() {
    try {
        const response = await fetch(COUNTER_BASE_URL);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`CounterAPI GET failed (${response.status}): ${errorText}`);
        }

        const payload = await response.json();
        return NextResponse.json(normalizeCounterPayload(payload));
    } catch (error) {
        console.error('Counter API error:', error);
        return NextResponse.json({ error: 'Failed to fetch counter' }, { status: 500 });
    }
}

export async function POST() {
    try {
        const response = await fetch(`${COUNTER_BASE_URL}/up`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`CounterAPI POST failed (${response.status}): ${errorText}`);
        }

        const payload = await response.json();
        return NextResponse.json(normalizeCounterPayload(payload));
    } catch (error) {
        console.error('Counter API error:', error);
        return NextResponse.json({ error: 'Failed to increment counter' }, { status: 500 });
    }
}
