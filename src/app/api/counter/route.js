import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const COUNTER_WORKSPACE = process.env.COUNTER_API_WORKSPACE || 'test';
const COUNTER_NAME = process.env.COUNTER_API_NAME || 'test';
const COUNTER_API_KEY = process.env.COUNTER_API_KEY;
const COUNTER_BASE_URL = `https://api.counterapi.dev/v2/${COUNTER_WORKSPACE}/${COUNTER_NAME}`;

function buildHeaders() {
    const headers = { 'Content-Type': 'application/json' };

    if (COUNTER_API_KEY) {
        headers.Authorization = `Bearer ${COUNTER_API_KEY}`;
    }

    return headers;
}

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
        const response = await fetch(COUNTER_BASE_URL, {
            cache: 'no-store',
            headers: buildHeaders(),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`CounterAPI GET failed (${response.status}): ${errorText}`);
        }

        const payload = await response.json();
        return NextResponse.json(normalizeCounterPayload(payload));
    } catch (error) {
        console.error('Counter API error:', error);
        return NextResponse.json({
            error: 'Failed to fetch counter. Set COUNTER_API_WORKSPACE and COUNTER_API_NAME for a production counter.',
        }, { status: 500 });
    }
}

export async function POST() {
    try {
        const response = await fetch(`${COUNTER_BASE_URL}/up`, {
            cache: 'no-store',
            headers: buildHeaders(),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`CounterAPI POST failed (${response.status}): ${errorText}`);
        }

        const payload = await response.json();
        return NextResponse.json(normalizeCounterPayload(payload));
    } catch (error) {
        console.error('Counter API error:', error);
        return NextResponse.json({
            error: 'Failed to increment counter. Set COUNTER_API_WORKSPACE and COUNTER_API_NAME for a production counter.',
        }, { status: 500 });
    }
}
