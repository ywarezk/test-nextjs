import React from 'react';
import Link from 'next/link';

export default function Tasks({tasks}) {
    return (
        <ul>
            {
                tasks.map(singleTask => 
                    <li key={singleTask.id}>
                        <Link href="/tasks/[id]" as={`/tasks/${singleTask.id}`}>
                            <a>
                                {
                                    singleTask.title
                                }
                            </a>
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
    const tasks = await res.json();
    return {
        props: {
            tasks
        }
    }
}